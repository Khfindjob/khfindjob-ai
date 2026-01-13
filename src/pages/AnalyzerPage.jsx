import React, { useState } from 'react';
import { Shield, AlertTriangle } from 'lucide-react';
import { Button } from '../components/atoms/Button';
import { Badge } from '../components/atoms/Badge';
import { SkillsMatchCircle } from '../components/molecules/SkillsMatchCircle';

export const AnalyzerPage = () => {
  const [inputText, setInputText] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const performAnalysis = () => {
    if (!inputText || inputText.length < 10) return;
    setAnalyzing(true);

    setTimeout(() => {
      let score = 100;
      let flags = [];
      const text = inputText.toLowerCase();

      // HEURISTIC 1: Financial Scams
      if (text.includes("fee") || text.includes("deposit") || text.includes("payment first") || text.includes("pay for")) {
        score -= 50;
        flags.push({ 
          text: "Upfront payment requested - Major red flag", 
          severity: "critical" 
        });
      }

      // HEURISTIC 2: Salary Mismatch
      const highSalary = text.match(/\$([2-9]\d{3,})/);
      if (highSalary && (text.includes("no experience") || text.includes("fresh graduate") || text.includes("entry level"))) {
        score -= 30;
        flags.push({ 
          text: "Unrealistic salary for entry-level position", 
          severity: "high" 
        });
      }

      // HEURISTIC 3: Vague Contact Info
      if (text.includes("telegram") && !text.includes("@") && !text.includes("email")) {
        score -= 15;
        flags.push({ 
          text: "Only Telegram contact - No official company email", 
          severity: "medium" 
        });
      }

      // HEURISTIC 4: Urgency Tactics
      if (text.includes("urgent") || text.includes("hire immediately") || text.includes("limited slots")) {
        score -= 10;
        flags.push({ 
          text: "High-pressure tactics detected", 
          severity: "medium" 
        });
      }

      // HEURISTIC 5: Poor Grammar
      const grammarIssues = (text.match(/\b(plz|pls|ur|u r|alot|gud)\b/g) || []).length;
      if (grammarIssues > 0) {
        score -= 10;
        flags.push({ 
          text: "Poor grammar/spelling - Unprofessional", 
          severity: "low" 
        });
      }

      setResult({
        safetyScore: Math.max(score, 5),
        flags: flags,
        isSafe: score > 70
      });
      setAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-10">
        <Shield size={64} className="mx-auto text-red-900 mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Cambodia AI Job Shield
        </h1>
        <p className="text-gray-600 text-lg">
          Analyze job descriptions or URLs for scams commonly found in the Cambodian market
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
        <textarea
          className="w-full h-40 p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none mb-4 transition"
          placeholder="Paste job description or link here...

Example: 'Urgent hiring! $3000 salary, no experience needed, deposit $50 for uniform...'"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button
          fullWidth
          size="lg"
          variant="secondary"
          onClick={performAnalysis}
          loading={analyzing}
          disabled={inputText.length < 10}
        >
          Check for Scams
        </Button>
      </div>

      {result && (
        <div className="mt-8 animate-in fade-in duration-500">
          <div className={`p-8 rounded-2xl border-2 ${
            result.isSafe 
              ? 'bg-green-50 border-green-200' 
              : 'bg-red-50 border-red-200'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <SkillsMatchCircle percentage={result.safetyScore} />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Safety Score</h3>
                  <p className="text-gray-600">Based on Cambodian scam patterns</p>
                </div>
              </div>
              <Badge 
                variant={result.isSafe ? "success" : "danger"} 
                className="text-lg py-2 px-4"
              >
                {result.isSafe ? "✓ Likely Safe" : "⚠ Potential Scam"}
              </Badge>
            </div>

            {result.flags.length > 0 ? (
              <div className="space-y-3">
                <p className="font-bold text-gray-700 mb-3">Detected Issues:</p>
                {result.flags.map((flag, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                  >
                    <AlertTriangle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-gray-800 font-medium">{flag.text}</p>
                      <p className="text-sm text-gray-500 mt-1 capitalize">
                        Severity: {flag.severity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-6 rounded-lg border border-green-200">
                <p className="text-green-700 font-semibold">
                  ✓ No major red flags detected. However, always do your own research before applying.
                </p>
              </div>
            )}

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Tip:</strong> Even if a job appears safe, verify the company through official channels 
                and never pay money upfront for job opportunities.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
