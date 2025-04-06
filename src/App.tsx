import React, { useState } from 'react';
import { 
  Phone, Mail, MessageCircle, HelpCircle, ChevronDown, ChevronUp, ExternalLink, 
  AlertCircle, XCircle, Clock, WifiOff, ShieldAlert, CreditCard, UserX, 
  BanknoteIcon, AlertTriangle, Bug, Ban, ShieldX, RefreshCw, Wifi, Server,
  UserCheck, Lock, FileWarning, Globe, Fingerprint, Wallet, KeyRound
} from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
  icon: React.ReactNode;
}

interface ErrorCode {
  code: string;
  title: string;
  description: string;
  solution: React.ReactNode;
  severity: 'high' | 'medium' | 'low';
  icon: React.ReactNode;
}

function App() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'contact' | 'errors' | 'codes'>('contact');

  const faqItems: FAQItem[] = [
    {
      question: "How do I contact Cash App Support?",
      answer: (
        <div className="space-y-2">
          <p>There are several ways to contact Cash App support:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Through the Cash App: Open Cash App → Profile → Support</li>
            <li>Call: 1-800-969-1940</li>
            <li>Website: <a href="https://cash.app/help" className="text-green-600 hover:text-green-700 underline" target="_blank" rel="noopener noreferrer">cash.app/help</a></li>
          </ul>
        </div>
      ),
      icon: <Phone className="w-6 h-6" />
    },
    {
      question: "What information should I have ready when contacting support?",
      answer: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Your Cash App $Cashtag</li>
          <li>Email address associated with your account</li>
          <li>Phone number linked to Cash App</li>
          <li>Last 4 digits of your linked debit card</li>
          <li>Transaction ID (if applicable)</li>
        </ul>
      ),
      icon: <HelpCircle className="w-6 h-6" />
    },
    {
      question: "How can I report a scam or unauthorized transaction?",
      answer: (
        <div className="space-y-2">
          <p>If you suspect fraud or an unauthorized transaction:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Open Cash App immediately</li>
            <li>Go to the Activity tab</li>
            <li>Select the transaction in question</li>
            <li>Click "..." and select "Report a Problem"</li>
            <li>Follow the prompts to report the issue</li>
          </ol>
          <p className="mt-2">For immediate assistance, contact support through the app or call 1-800-969-1940.</p>
        </div>
      ),
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      question: "What are Cash App's support hours?",
      answer: (
        <div>
          <p>Cash App's customer support is available 24/7 through:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>In-app support</li>
            <li>Phone support</li>
            <li>Website help center</li>
          </ul>
        </div>
      ),
      icon: <Mail className="w-6 h-6" />
    }
  ];

  const errorItems: FAQItem[] = [
    {
      question: "Payment Failed - Insufficient Funds",
      answer: (
        <div className="space-y-2">
          <p className="font-medium text-red-600">Error: "Payment Failed Due to Insufficient Funds"</p>
          <p className="font-medium mt-2">How to fix:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Check your Cash App balance</li>
            <li>Verify your linked bank account has sufficient funds</li>
            <li>Try adding funds to your Cash App balance</li>
            <li>Check if your bank is blocking the transaction</li>
          </ol>
          <p className="mt-2 text-sm text-gray-600">Note: Some banks may have daily transfer limits that can cause this error.</p>
        </div>
      ),
      icon: <XCircle className="w-6 h-6" />
    },
    {
      question: "Transfer Pending for Too Long",
      answer: (
        <div className="space-y-2">
          <p className="font-medium text-orange-600">Issue: Transfer Stuck in "Pending" Status</p>
          <p className="font-medium mt-2">Solutions:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Wait 24-48 hours for standard transfers</li>
            <li>Check your internet connection</li>
            <li>Force stop and restart the Cash App</li>
            <li>Verify your account details are correct</li>
            <li>Contact support if pending over 48 hours</li>
          </ol>
        </div>
      ),
      icon: <Clock className="w-6 h-6" />
    },
    {
      question: "Connection Error During Payment",
      answer: (
        <div className="space-y-2">
          <p className="font-medium text-orange-600">Error: "Connection Error" or "Network Issue"</p>
          <p className="font-medium mt-2">Troubleshooting steps:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Check your internet connection</li>
            <li>Switch between Wi-Fi and mobile data</li>
            <li>Update the Cash App to the latest version</li>
            <li>Clear the app's cache</li>
            <li>Restart your device</li>
          </ol>
          <p className="mt-2 text-sm text-gray-600">If the problem persists, try uninstalling and reinstalling the app.</p>
        </div>
      ),
      icon: <WifiOff className="w-6 h-6" />
    }
  ];

  const errorCodes: ErrorCode[] = [
    {
      code: "C1001",
      title: "Payment Processing Error",
      description: "Transaction failed due to payment processing system error",
      severity: "high",
      solution: (
        <div className="space-y-2">
          <p className="font-medium">Immediate actions:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Wait 15 minutes before retrying the transaction</li>
            <li>Verify your payment method is valid and has sufficient funds</li>
            <li>Check if there are any Cash App service outages</li>
            <li>Clear app cache and restart the application</li>
          </ol>
          <p className="mt-2 text-sm text-gray-600">If the error persists after 24 hours, contact Cash App support.</p>
        </div>
      ),
      icon: <Bug className="w-6 h-6" />
    },
    {
      code: "C2002",
      title: "Account Verification Required",
      description: "Additional verification needed to complete this transaction",
      severity: "medium",
      solution: (
        <div className="space-y-2">
          <p className="font-medium">Required steps:</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Verify your email address and phone number</li>
            <li>Complete identity verification (if requested)</li>
            <li>Add and verify a bank account</li>
            <li>Update to the latest version of Cash App</li>
          </ol>
          <p className="mt-2 text-sm text-gray-600">Verification usually takes 24-48 hours to process.</p>
        </div>
      ),
      icon: <ShieldX className="w-6 h-6" />
    }
  ];

  const getDisplayItems = () => {
    switch (activeTab) {
      case 'contact':
        return faqItems;
      case 'errors':
        return errorItems;
      case 'codes':
        return errorCodes.map(code => ({
          question: `${code.code}: ${code.title}`,
          answer: (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded text-sm font-medium ${
                  code.severity === 'high' ? 'bg-red-100 text-red-800' :
                  code.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {code.severity.toUpperCase()} SEVERITY
                </span>
              </div>
              <p className="text-gray-700">{code.description}</p>
              <div className="mt-4">{code.solution}</div>
            </div>
          ),
          icon: code.icon
        }));
      default:
        return faqItems;
    }
  };

  const displayItems = getDisplayItems();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-green-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Cash App Support & Contact Information</h1>
            <p className="text-xl opacity-90">Get help with your Cash App account and learn how to contact support</p>
          </div>
        </div>

        {/* Guide Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="prose max-w-none bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold">Complete Guide to Cash App Error Codes, Fixes, and How to Contact Cash App Support</h1>
            
            <p>Cash App is a popular peer-to-peer mobile payment platform that allows users to send, receive, and manage money conveniently. However, like any digital application, Cash App is not immune to technical issues. Users often encounter error codes that can interrupt transactions or access.</p>

            <h2 className="text-2xl font-bold mt-8">Why You Might Encounter Cash App Errors</h2>
            <p>Cash App error codes usually occur because of:</p>
            <ul>
              <li>Network connectivity issues</li>
              <li>Outdated or buggy app versions</li>
              <li>Bank-related problems</li>
              <li>Incorrect account or card details</li>
              <li>Security flags or restrictions</li>
              <li>Server outages or maintenance</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">Common Cash App Error Codes and Fixes</h2>
            
            <h3 className="text-xl font-bold mt-6">3.1. Error Code 403 – Forbidden</h3>
            <p><strong>Cause:</strong> App permissions are restricted.</p>
            <p><strong>Fix:</strong></p>
            <ul>
              <li>Update your app</li>
              <li>Allow necessary permissions (location, contacts, etc.)</li>
              <li>Restart your device</li>
              <li>Log out and back in</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8">General Troubleshooting Tips</h2>
            <ul>
              <li>Restart your phone</li>
              <li>Clear Cash App's cache</li>
              <li>Uninstall and reinstall the app</li>
              <li>Ensure your app is updated</li>
              <li>Disable VPN if active</li>
              <li>Check your internet speed and signal</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">How to Contact Cash App Support</h2>
            
            <h3 className="text-xl font-bold mt-6">5.1 In-App Support:</h3>
            <ol>
              <li>Open Cash App</li>
              <li>Tap your profile icon (top right)</li>
              <li>Scroll down and tap "Support"</li>
              <li>Choose your issue or "Something Else"</li>
              <li>Follow prompts to get help or chat with support</li>
            </ol>

            <h3 className="text-xl font-bold mt-6">5.2 Cash App Website:</h3>
            <p>Visit <a href="https://cash.app/help" className="text-green-600 hover:text-green-700">https://cash.app/help</a> to browse support articles or contact support.</p>

            <h3 className="text-xl font-bold mt-6">5.3 Phone Support:</h3>
            <p>Cash App offers limited phone support via an automated line:<br />
            <strong>1-800-969-1940</strong><br />
            (Note: No live agents. Be cautious of scam numbers pretending to be support.)</p>

            <h3 className="text-xl font-bold mt-6">5.4 Social Media:</h3>
            <ul>
              <li>Twitter: <a href="https://twitter.com/CashApp" className="text-green-600 hover:text-green-700">@CashApp</a></li>
              <li>Instagram: <a href="https://instagram.com/cashapp" className="text-green-600 hover:text-green-700">@cashapp</a></li>
            </ul>
            <p className="text-red-600">⚠️ Never share your PIN, sign-in code, or personal info on social media.</p>

            <h2 className="text-2xl font-bold mt-8">When You Should Contact Cash App Support</h2>
            <ul>
              <li>You have a failed or stuck payment</li>
              <li>Your funds are missing or delayed</li>
              <li>You're locked out of your account</li>
              <li>Your account was hacked or compromised</li>
              <li>Identity verification takes more than 48 hours</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">How to Avoid Errors and Scams on Cash App</h2>
            <ul>
              <li>Always use strong internet</li>
              <li>Never share your sign-in code</li>
              <li>Enable Face ID or PIN for security</li>
              <li>Don't send money to "claim prizes"</li>
              <li>Only use official support channels</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">Final Thoughts</h2>
            <p>Cash App is a convenient and widely used money transfer tool, but like any app, it's not perfect. From card errors to server issues, these error codes can disrupt your transactions. The good news is that most errors can be resolved with simple fixes like updating the app, verifying account details, or restarting your phone.</p>

            <p>If you're stuck, don't hesitate to contact <strong>Cash App support</strong>. Their in-app help center, website, and verified social channels offer guidance for nearly any issue.</p>

            <p>By following best practices and understanding what each error code means, you can troubleshoot confidently and avoid unnecessary delays.</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-4xl mx-auto px-4 pt-8">
          <div className="flex space-x-4 border-b border-gray-200">
            <button
              className={`pb-4 px-4 text-lg font-medium transition-colors ${
                activeTab === 'contact'
                  ? 'border-b-2 border-green-500 text-green-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('contact')}
            >
              Contact Information
            </button>
            <button
              className={`pb-4 px-4 text-lg font-medium transition-colors ${
                activeTab === 'errors'
                  ? 'border-b-2 border-green-500 text-green-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('errors')}
            >
              Common Errors
            </button>
            <button
              className={`pb-4 px-4 text-lg font-medium transition-colors ${
                activeTab === 'codes'
                  ? 'border-b-2 border-green-500 text-green-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('codes')}
            >
              Error Codes
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {displayItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`${activeTab === 'errors' || activeTab === 'codes' ? 'text-red-500' : 'text-green-500'}`}>
                      {item.icon}
                    </div>
                    <span className="text-lg font-medium text-left">{item.question}</span>
                  </div>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <div className="text-gray-700 prose">{item.answer}</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Resources */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Additional Resources</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <a
                href="https://cash.app/help"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-4 rounded-lg border border-gray-200 hover:border-green-500 transition-colors"
              >
                <HelpCircle className="w-5 h-5 text-green-500" />
                <span>Cash App Help Center</span>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </a>
              <a
                href="https://cash.app/security"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-4 rounded-lg border border-gray-200 hover:border-green-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-green-500" />
                <span>Security Center</span>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;