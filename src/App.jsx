import React, { useState } from 'react';
import { Navigation } from './components/organisms/Navigation';
import { Footer } from './components/organisms/Footer';
import { HomePage } from './pages/HomePage';
import { JobsPage } from './pages/JobsPage';
import { AnalyzerPage } from './pages/AnalyzerPage';
import { CandidateRegisterPage } from './pages/CandidateRegisterPage';
import { EmployerRegisterPage } from './pages/EmployerRegisterPage';
import { LoginPage } from './pages/LoginPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('/');
  const [user, setUser] = useState(null);

  const navigate = (path) => {
    setCurrentPage(path);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case '/':
        return <HomePage onNavigate={navigate} />;
      case '/jobs':
        return <JobsPage onNavigate={navigate} />;
      case '/analyze':
        return <AnalyzerPage onNavigate={navigate} />;
      case '/register/candidate':
        return <CandidateRegisterPage onNavigate={navigate} />;
      case '/register/employer':
        return <EmployerRegisterPage onNavigate={navigate} />;
      case '/login':
        return <LoginPage onNavigate={navigate} setUser={setUser} />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation 
        currentPage={currentPage} 
        onNavigate={navigate} 
        user={user} 
      />
      
      <main className="flex-grow">
        {renderPage()}
      </main>
      
      <Footer onNavigate={navigate} />
    </div>
  );
}