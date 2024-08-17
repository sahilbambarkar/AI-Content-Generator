"use client"
import React, { useState } from 'react';
import FormSection from './_components/FormSection';
import OutputSection from './_components/OutputSection';
import { TEMPLATE } from '../../_components/TemplatelistSection';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { chatSession } from '@/utils/AiModal';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';

interface PROPS {
    params: {
        'template-slug': string;
    };
}

function CreateNewContent(props: PROPS) {
    const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug === props.params['template-slug']);
    const [loading, setLoading] = useState(false);
    const [aiOutput, setAiOutput] = useState<string>('');
    const { user } = useUser();

    const GenerateAIContent = async (FormData: any) => {
        setLoading(true);
        try {
            const SelectedPrompt = selectedTemplate?.aiPrompt;
            const FinalAIPrompt = JSON.stringify(FormData) + ", " + SelectedPrompt;

            const result = await chatSession.sendMessage(FinalAIPrompt);
            const aiResponse = await result?.response.text();

            setAiOutput(aiResponse);

            await SaveInDb(FormData, selectedTemplate?.slug, aiResponse);
        } catch (error) {
            console.error("Error generating AI content: ", error);
        } finally {
            setLoading(false);
        }
    };

    const SaveInDb = async (formData: any, slug: any, aiResp: string) => {
        try {
            // Use an empty string or some default value instead of null
            const createdBy = user?.primaryEmailAddress?.emailAddress || "unknown@domain.com";

            const result = await db.insert(AIOutput).values({
                formData: formData,
                templatesSlug: slug,
                aiResponse: aiResp,
                createdBy: createdBy,
                createdAt: moment().format('DD/MM/yyyy'),
            });
            console.log("Database Insertion Result: ", result);
        } catch (error) {
            console.error("Error saving to database: ", error);
        }
    };

    return (
        <div className='p-10'>
            <Link href={"/dashboard"}>
                <Button><ArrowLeft />Back</Button>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                {/* Form Section */}
                <FormSection
                    selectedTemplate={selectedTemplate}
                    userFormInput={(s: any) => GenerateAIContent(s)}
                    loading={loading}
                />
                <div className='col-span-2'>
                    {/* Output section */}
                    <OutputSection aiOutput={aiOutput} />
                </div>
            </div>
        </div>
    );
}

export default CreateNewContent;
