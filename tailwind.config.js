/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                redhd: ["Red Hat Display", "sans-serif"],
            },
            colors: {
                // Primary
                "pale-blue": "hsl(var(--pale-blue))",
                "bright-blue": "hsl(var(--bright-blue))",

                // Neutral
                "very-pale-blue": "hsl(var(--very-pale-blue))",
                "desaturated-blue": "hsl(var(--desaturated-blue))",
                "dark-blue": "hsl(var(--dark-blue))",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
