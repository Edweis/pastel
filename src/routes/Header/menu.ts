
export type SubMenu = {
    title: string,
    description?: string;
    href?: string
    icon?: string
}
export type Menu = {
    href: string;
    title: string;
    style: string
    categories?:
    Array<{ name?: string, items: SubMenu[] }>
};
export const menu: Menu[] = [
    {
        style: "after:bg-indigo-500", href: "/why", title: "Why Pastel",
        categories: [
            {
                name: 'POWERFUL, SIMPLE ANALYTICS',
                items: [
                    {
                        title: 'Interactive Reports',
                        description: 'Learn about your users',
                    },
                    {
                        title: 'Team Boards & Alerts',
                        description: 'Monitor your metrics',
                    },
                    {
                        title: 'Limitless Segmentation',
                        description: 'Surface hidden trends',
                    },
                    {
                        title: 'Group Analytics',
                        description: 'Measure B2B account health ',
                    },
                ]
            },
            {
                name: 'TOOLS FOR TRUSTED DATA',
                items: [
                    { title: 'Data Integrations', description: 'Connect to your warehouse' },
                    { title: 'Data Management', description: 'Keep data clean & usable' },
                    { title: 'Security & Privacy', description: 'Protect customer data' },
                    { title: 'Scalable infrastructure', description: 'Ingest & query at any volume ' }
                ]
            },
            { name: 'MORE', items: [{ title: 'Integration Directory', description: '50+ connections to top tools' }] }
        ]
    },
    {
        style: "after:bg-orange-500", href: "/solutions", title: "Solutions",
        categories: [
            {
                items: [
                    { title: 'Convert', description: 'Analyze conversion and drop-off' }, { title: 'Engage', description: 'Measure active usage' }, { title: 'Retain', description: 'Find retention drivers ' },
                ]
            }
        ]
    },
    {
        style: "after:bg-green-500", href: "/resources", title: "Resources",
        categories: [
            {
                name: 'USING MIXPANEL', items: [
                    { title: 'Developer Docs' },
                    { title: 'Help Center' },
                    { title: 'Product Updates' },
                    { title: 'User Community' },
                ]
            },
            {
                name: 'Best Practices', items: [
                    { title: 'FAQs' },
                    { title: 'Blog' },
                    { title: 'Engineering Blog' },
                    { title: 'Events' },
                ]
            },
            {
                name: 'More', items: [
                    { title: 'Customer Stories' },
                    { title: 'Talk to a Partner' },
                    { title: 'Testimonials' },
                    { title: 'Startup Program' },
                ]
            },

        ]
    },
    {
        style: "after:bg-yellow-500", href: "/pricing", title: "Pricing",
    },
]
