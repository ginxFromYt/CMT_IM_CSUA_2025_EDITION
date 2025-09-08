# IT 216: Computer Maintenance and Troubleshooting

A comprehensive web-based instructional materials platform for 2nd year students studying Computer Maintenance and Troubleshooting.

## Features

- **Interactive Module Navigation**: Easy-to-use sidebar navigation for different course modules
- **Comprehensive Content**: Organized lessons, overviews, and quizzes for each module
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, student-friendly interface with engaging visuals
- **Quiz System**: Interactive knowledge checks for each module

## Course Modules

1. **Introduction to Computer Maintenance** - Basic concepts and overview
2. **Hardware Components** - Understanding computer hardware and functions
3. **Software Systems** - Operating systems and software troubleshooting
4. **Troubleshooting Methodology** - Systematic problem-solving approaches
5. **Preventive Maintenance** - Best practices for system maintenance
6. **Tools and Resources** - Essential diagnostic tools and software

## Development

### Prerequisites

- Node.js (v20.14.0 or higher)
- npm (v10.8.1 or higher)

### Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to Netlify

This project is configured for easy deployment to Netlify:

1. **Push to GitHub**: Make sure your code is in a GitHub repository
2. **Connect to Netlify**: 
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your repository
3. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Deploy**: Netlify will automatically build and deploy your site

### Automatic Deployments

Once connected, Netlify will automatically redeploy your site whenever you push changes to your GitHub repository.

## Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **CSS3** - Styling with modern CSS features
- **HTML5** - Semantic markup

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Site header
│   ├── Navigation.jsx  # Module navigation
│   ├── ModuleContent.jsx # Main content area
│   └── Footer.jsx      # Site footer
├── App.jsx             # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles
```

## Contributing

This is an educational project. If you're an instructor or student wanting to contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is for educational use only.

## Support

For technical support or questions about the course content, please contact your instructor.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
