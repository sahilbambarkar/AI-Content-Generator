export default[
    {
        name:'Blog Title',
        desc:'An AI tool that generates blog title depends your blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt:'Give me 5 blogs topic idea in bullet wise only based on give  niche & outline topic and provide me result in rich text editor format ',
        slug:'Generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',

            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool that serves as your personal blog post title depends your  information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/9836/9836465.png',
        aiPrompt: 'Generate Blog Content based on topic & outline topic in rich text editor format ',
        slug: 'blog-content-generation',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter blog outline here',
                field: 'textarea',
                name: 'outline',

            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that serves as your personal blog topic ideas depends your  information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/11497/11497847.png',
        aiPrompt: 'Generate top 5 blog topic ideas in bullet wise only based on give  niche & outline topic and provide me result in rich text editor format ',
        slug: 'Generate-Topic-idea',
        form: [
            {
                label: 'Enter your  niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            
        ]
    },
    {
        name: 'Youtube SEO Title',
        desc: 'An AI tool that generates Youtube title depends your  information',
        category: 'Youtube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/440/440727.png',
        aiPrompt: 'Give me Best SEO optimized high ranked 5 title ideas in bullet wise only based on given  keywords & outline topic and provide me result in rich text editor format ',
        slug: 'youtube-seo-title',
        form: [
            {
                label: 'Enter your youtube video topic keywords',
                field: 'input',
                name: 'keywords',
                required: true
            },
            {
                label: 'Enter youtube description outline here',
                field: 'textarea',
                name: 'outline',

            }
        ]
    },
    {
        name: 'Youtube Description',
        desc: 'An AI tool that generates Youtube title depends your  information',
        category: 'Youtube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/3938/3938026.png',
        aiPrompt: 'Generate Youtube Description with emoji under 4-5 lines in bullet wise only based on given  keywords & outline topic and provide me result in rich text editor format ',
        slug: 'youtube-description',
        form: [
            {
                label: 'Enter your youtube video topic keywords',
                field: 'input',
                name: 'keywords',
                required: true
            },
            {
                label: 'Enter youtube  outline here',
                field: 'textarea',
                name: 'outline',

            }
        ]
    },
    {
        name: 'Youtube Tags',
        desc: 'An AI tool that generates Youtube title depends your  information',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/10884/10884882.png',
        aiPrompt: 'Generate 10 Youtube tags in bullet wise only based on given title and provide me result in rich text editor format ',
        slug: 'youtube-tag',
        form: [
            {
                label: 'Enter your youtube title',
                field: 'input',
                name: 'title',
                required: true
            },
            {
                label: 'Enter youtube  outline here(optional)',
                field: 'textarea',
                name: 'outline',

            }
        ]
    },
    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'Use this tool to rewrite existing Article or Blog Post',
        category: 'Rewriting Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/3146/3146159.png',
        aiPrompt: 'Rewrite given article without any Plagiarism  in rich text editor format ',
        slug: 'rewrite-article',
        form: [
            {
                label: 'Provide your Article/Blog post or any other',
                field: 'textarea',
                name: 'article',
                required: true
            },

        ]
    },
    {
        name: 'Text Improver',
        desc: 'This handy tool refines your writing eliminating errors from  Post',
        category: 'Writing Assistant',
        icon: 'https://cdn-icons-png.flaticon.com/128/12860/12860749.png',
        aiPrompt: 'Given textToImprove,Rewrite text without any grammatical errors in rich text editor format ',
        slug: 'text-Improver',
        form: [
            {
                label: 'Enter text that you want to re-write or improve',
                field: 'textarea',
                name: 'textToImprove', 
            },

        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'An AI tool that serves as for adding emojis to text depends your  information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584602.png',
        aiPrompt: 'Add Emoji to outline text depends on outline  and rewrite in rich text editor format ',
        slug: 'add-emoji-to-text',
        form: [
            {
                label: 'Enter your text to add emojis',
                field: 'textarea',
                name: 'outline',
                required: true
            },

        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'An AI tool that serves as your personal Insta post generator based on your information',
        category: 'instagram tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
        aiPrompt: 'Generate 3 Instagram posts based on the provided keywords. Each post should include a caption, relevant hashtags, and a suitable image suggestion. Provide the results in rich text editor format, including the images.',
        slug: 'instagram-post-generator',
        form: [
            {
                label: 'Enter your keywords for your post',
                field: 'input',
                name: 'keywords',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Hashtag Generator',
        desc: 'An AI tool that serves as your personal Insta Hashtags depends your  information',
        category: 'instagram tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/10636/10636882.png',
        aiPrompt: 'Generate 10 instagram Hashtags depends on given keywords and provide me result in rich text editor format ',
        slug: 'instagram-hashtags-generator',
        form: [
            {
                label: 'Enter your keywords to your Hashtags',
                field: 'input',
                name: 'keywords',
                required: true
            },

        ]
    },  
    {
        name: 'English Grammar checker',
        desc: 'An AI tool that serves to check your english grammar based on your  information',
        category: 'grammar tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/2463/2463149.png',
        aiPrompt: 'Checks the grammar depends on given keywords and provide me result in rich text editor format ',
        slug: 'english-grammar-checker',
        form: [
            {
                label: 'Enter your keywords to your sentence',
                field: 'input',
                name: 'keywords',
                required: true
            },

        ]
    },  
    {
        name: 'Write Code',
        desc: 'An AI tool that serves to write code in any language based on your information',
        category: 'coding tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/6062/6062646.png',
        aiPrompt: 'Write code in the given programming language based on the provided keywords. Ensure the code is properly formatted and includes comments explaining each section. Provide the result in rich text editor format with syntax highlighting.',
        slug: 'code-writer',
        form: [
            {
                label: 'Enter your programming language',
                field: 'input',
                name: 'language',
                required: true
            },
            {
                label: 'Enter your keywords for your code',
                field: 'input',
                name: 'keywords',
                required: true
            }
        ]
    }, 
    {
        name: 'Explain Code',
        desc: 'An AI tool that explains code in any language based on your information',
        category: 'coding tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/868/868786.png',
        aiPrompt: 'Explain the given code in detail, breaking down each section and its purpose. Provide the explanation in rich text editor format with the original code included and highlighted for reference.',
        slug: 'code-explainer',
        form: [
            {
                label: 'Enter the programming language of the code',
                field: 'input',
                name: 'language',
                required: true
            },
            {
                label: 'Enter your code for explanation',
                field: 'textarea',
                name: 'code',
                required: true
            }
        ]
    },



]