cat > README.md << 'EOF'
# 🛡️ KHFindJob - AI-Powered Job Platform for Cambodia

AI-powered job platform with built-in scam detection specifically designed for the Cambodian job market.

## ✨ Features

- 🤖 **AI Scam Detection** - Automatically analyze job postings for red flags
- 🎯 **Smart Job Matching** - Get personalized recommendations based on skills
- 📊 **Salary Insights** - Compare salaries across industries
- 🔒 **Safety First** - Protect job seekers from human trafficking and scams
- 📱 **Mobile Responsive** - Works perfectly on all devices

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure
```
src/
├── components/
│   ├── atoms/          # Basic building blocks (Button, Badge, Input)
│   ├── molecules/      # Component combinations (JobCard, SkillsMatchCircle)
│   └── organisms/      # Complex components (Navigation, Footer)
├── pages/              # Full page components
│   ├── HomePage.jsx
│   ├── JobsPage.jsx
│   ├── AnalyzerPage.jsx
│   ├── CandidateRegisterPage.jsx
│   ├── EmployerRegisterPage.jsx
│   └── LoginPage.jsx
├── App.jsx             # Main app with routing
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Design System

- **Colors**: Navy Blue (#1e3a8a), Maroon (#991b1b), White
- **Architecture**: Atomic Design (Atoms → Molecules → Organisms → Pages)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## 🔧 Technologies

- React 18
- Vite
- Tailwind CSS
- Lucide Icons

## 📝 License

MIT License - feel free to use for your projects

## 🤝 Contributing

Contributions welcome! Please open an issue first to discuss changes.

---

Built with ❤️ for Cambodia 🇰🇭
EOF