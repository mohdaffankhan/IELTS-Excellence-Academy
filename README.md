# IELTS Excellence Academy - Home Page

A modern, responsive home page for a fictional IELTS Institute built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional layout with a marketing feel
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Component-Based**: Reusable React components with TypeScript
- **Accessibility**: Focus management and semantic HTML
- **Performance**: Fast loading with Vite build system
- **Testing**: Unit tests with Vitest and Testing Library

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3
- **Testing**: Vitest + Testing Library
- **Package Manager**: pnpm
- **Linting**: ESLint 9

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mohdaffankhan/IELTS-Excellence-Academy
   cd ielts-institute
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start development server**

   ```bash
   pnpm dev
   ```

4. **Build for production**

   ```bash
   pnpm build
   ```

5. **Preview production build**
   ```bash
   pnpm preview
   ```

## 🧪 Testing

Run the test suite:

```bash
# Run tests once
pnpm test:run

# Run tests in watch mode
pnpm test

# Run tests with UI
pnpm test:ui
```

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Button.tsx      # Button component with variants
│   ├── Card.tsx        # Card component with hover effects
│   ├── Navbar.tsx      # Responsive navigation
│   ├── Hero.tsx        # Hero section with CTA
│   ├── Features.tsx    # Feature cards section
│   ├── Testimonials.tsx # Student testimonials
│   ├── Footer.tsx      # Footer with contact info
│   └── index.ts        # Component exports
├── constants/           # Static data and content
│   └── data.ts         # Dummy content for all sections
├── types/              # TypeScript type definitions
│   └── index.ts        # Interface definitions
├── test/               # Test configuration
│   └── setup.ts        # Test setup file
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## 🎨 Design System

### Color Palette

- **Primary**: Blue (#2563eb) - Professional, trustworthy
- **Secondary**: Gray (#64748b) - Neutral, readable
- **Accent**: Amber (#f59e0b) - Attention-grabbing, energetic
- **Background**: White (#ffffff) - Clean, minimal
- **Surface**: Light gray (#f8fafc) - Subtle contrast

### Typography

- **Font Family**: System fonts (system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto)
- **Hierarchy**: Clear heading levels with appropriate sizing
- **Line Height**: 1.6 for optimal readability

### Components

- **Button**: Three variants (primary, secondary, outline) with hover states
- **Card**: Subtle shadows with smooth hover animations
- **Responsive Grid**: CSS Grid and Flexbox for layout
- **Mobile-First**: Responsive design starting from mobile

## 📱 Responsive Design

The application is built with a mobile-first approach:

- **Mobile** (< 768px): Single column layout, stacked components
- **Tablet** (768px - 1024px): Two-column layouts where appropriate
- **Desktop** (> 1024px): Full multi-column layouts with optimal spacing

### Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🔧 Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm test` - Run tests in watch mode
- `pnpm test:run` - Run tests once
- `pnpm test:ui` - Run tests with UI
- `pnpm lint` - Run ESLint

### Code Quality

- **ESLint**: Configured with React and TypeScript rules
- **TypeScript**: Strict type checking enabled
- **Prettier**: Code formatting (if configured)
- **Testing**: Unit tests for components and functionality

## 📄 Content Management

All content is managed through the `src/constants/data.ts` file:

- **Institute Information**: Name, tagline, description
- **Navigation**: Menu links and structure
- **Hero Content**: Headlines, CTAs, and messaging
- **Features**: Service offerings and benefits
- **Testimonials**: Student reviews and achievements
- **Contact Info**: Email, phone, address, social media

## 🚀 Deployment

### GitHub Pages

1. Build the project: `pnpm build`
2. Deploy the `dist` folder to GitHub Pages
3. Configure custom domain if needed

### Vercel

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `pnpm build`
   - Output Directory: `dist`
3. Deploy automatically on push to main branch

### Netlify

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build Command: `pnpm build`
   - Publish Directory: `dist`
3. Deploy automatically on push to main branch

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Run tests: `pnpm test:run`
5. Commit your changes: `git commit -m 'Add feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎯 Future Enhancements

- [ ] Add animations and micro-interactions
- [ ] Implement dark mode toggle
- [ ] Add more comprehensive testing
- [ ] Integrate with a CMS for content management
- [ ] Add internationalization (i18n) support
- [ ] Implement analytics tracking
- [ ] Add performance monitoring
- [ ] Create component documentation with Storybook

## 📞 Support

For questions or support, please contact:

- Email: info@ielts-excellence.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
