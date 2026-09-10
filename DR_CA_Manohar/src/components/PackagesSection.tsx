'use client';
import { useState } from 'react';

export default function PackagesSection() {
  const [mainTab, setMainTab] = useState('mentors');
  const [categoryTab, setCategoryTab] = useState('10-12');

  return (
    <section id="packages" className="py-12 px-4 min-h-screen flex flex-col items-center justify-start bg-gray-50 text-gray-900 font-sans">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Main Tabs */}
        <div className="flex w-full mb-6 max-w-4xl mx-auto border border-blue-600 rounded overflow-hidden">
          <button 
            className={`flex-1 py-3 text-center text-sm font-bold ${mainTab === 'mentors' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}
            onClick={() => setMainTab('mentors')}
          >
            Mentor's Plans
          </button>
          <button 
            className={`flex-1 py-3 text-center text-sm font-bold ${mainTab === 'custom' ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}
            onClick={() => setMainTab('custom')}
          >
            Customize Your Membership Plan
          </button>
        </div>

        {mainTab === 'mentors' ? (
          <>
            {/* Category Tabs */}
            <div className="flex w-full mb-12 gap-2 max-w-6xl mx-auto overflow-x-auto">
              {['8-9', '10-12', 'college', 'working'].map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 py-3 px-2 text-center text-xs md:text-sm font-bold border rounded ${categoryTab === tab ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-600 border-gray-200'}`}
                  onClick={() => setCategoryTab(tab)}
                >
                  {tab === '8-9' ? '8-9 STUDENTS' : tab === '10-12' ? '10-12 STUDENTS' : tab === 'college' ? 'COLLEGE GRADUATES' : 'WORKING PROFESSIONALS'}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 w-full max-w-6xl mx-auto justify-center">
              {/* Right Cards */}
              <div className="w-full lg:w-4/5 flex flex-col md:flex-row gap-6">
                
                {/* Standard Card */}
                <div className="border border-gray-100 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 flex-1 relative">
                  <div className="text-xs text-blue-400 font-bold mb-4 tracking-wider">STANDARD</div>
                  
                  {categoryTab === '10-12' || categoryTab === '8-9' ? (
                    <>
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-blue-500 mb-2">Achieve Online</h3>
                        <p className="text-2xl font-bold text-blue-500">₹ 5,999</p>
                      </div>
                      <ul className="text-sm space-y-4 mb-8 text-gray-600">
                        <li className="flex items-start"><span className="text-blue-500 mr-3">✓</span> Psychometric assessment to measure your interests, personality and abilities</li>
                        <li className="flex items-start"><span className="text-blue-500 mr-3">✓</span> 1 career counselling session</li>
                        <li className="flex items-start"><span className="text-blue-500 mr-3">✓</span> Lifetime access to Knowledge Gateway</li>
                        <li className="flex items-start"><span className="text-blue-500 mr-3">✓</span> Pre-recorded webinars by industry experts</li>
                        <li className="flex items-start text-gray-400"><span className="mr-3">✕</span> <span className="line-through">Customised reports after each session with education pathways</span></li>
                        <li className="flex items-start text-gray-400"><span className="mr-3">✕</span> <span className="line-through">Guidance on studying abroad</span></li>
                        <li className="flex items-start text-gray-400"><span className="mr-3">✕</span> <span className="line-through">CV reviews during internships/graduation</span></li>
                      </ul>
                    </>
                  ) : categoryTab === 'college' || categoryTab === 'working' ? (
                    <>
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-blue-500 mb-2">Ascend Online</h3>
                        <p className="text-2xl font-bold text-blue-500">₹ 6,499</p>
                      </div>
                      <ul className="text-sm space-y-4 mb-8 text-gray-600">
                        <li className="flex items-start"><span className="text-blue-500 mr-3">✓</span> Psychometric assessment to measure your interests, personality and abilities</li>
                        <li className="flex items-start"><span className="text-blue-500 mr-3">✓</span> 1 career counselling session</li>
                        <li className="flex items-start"><span className="text-blue-500 mr-3">✓</span> Lifetime access to Knowledge Gateway</li>
                        <li className="flex items-start"><span className="text-blue-500 mr-3">✓</span> Pre-recorded webinars by industry experts</li>
                        <li className="flex items-start text-gray-400"><span className="mr-3">✕</span> <span className="line-through">Customised reports after each session with information on certificates/online courses</span></li>
                        <li className="flex items-start text-gray-400"><span className="mr-3">✕</span> <span className="line-through">Guidance on studying abroad</span></li>
                        <li className="flex items-start text-gray-400"><span className="mr-3">✕</span> <span className="line-through">CV reviews for job application</span></li>
                      </ul>
                    </>
                  ) : null}
                  <div className="flex justify-center mt-auto">
                    <button className="bg-[#5c6df5] hover:bg-blue-600 text-white text-xs font-bold py-3 px-12 rounded-full transition-colors">BUY NOW</button>
                  </div>
                </div>
                
                {/* Premium Card */}
                <div className="border border-gray-100 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 flex-1 relative overflow-hidden">
                  <div className="absolute -top-3 -right-3 w-16 h-16 border-[6px] border-[#e81c7f] rounded-full border-l-transparent border-b-transparent transform rotate-45 z-10"></div>
                  
                  <div className="text-xs text-blue-500 font-bold mb-4 tracking-wider">PREMIUM</div>
                  
                  {categoryTab === '10-12' || categoryTab === '8-9' ? (
                    <>
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-[#5c6df5] mb-2">Achieve Plus+</h3>
                        <p className="text-2xl font-bold text-[#5c6df5]">₹ 10,599</p>
                      </div>
                      <ul className="text-sm space-y-4 mb-8 text-gray-600">
                        <li className="flex items-start"><span className="text-[#5c6df5] mr-3">✓</span> Psychometric assessment to measure your interests, personality and abilities</li>
                        <li className="flex items-start"><span className="text-[#5c6df5] mr-3">✓</span> 4 career counselling sessions</li>
                        <li className="flex items-start"><span className="text-[#5c6df5] mr-3">✓</span> Lifetime access to Knowledge Gateway</li>
                        <li className="flex items-start"><span className="text-[#5c6df5] mr-3">✓</span> Attend live webinars by industry experts</li>
                        <li className="flex items-start"><span className="text-[#5c6df5] mr-3">✓</span> Customised reports after each session with education pathways</li>
                        <li className="flex items-start"><span className="text-[#5c6df5] mr-3">✓</span> Guidance on studying abroad</li>
                        <li className="flex items-start"><span className="text-[#5c6df5] mr-3">✓</span> CV reviews during internships/graduation</li>
                      </ul>
                    </>
                  ) : categoryTab === 'college' || categoryTab === 'working' ? (
                    <>
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-[#5c6df5] mb-2">Ascend Plus+</h3>
                        <p className="text-2xl font-bold text-[#5c6df5]">₹ 10,599</p>
                      </div>
                      <ul className="text-sm space-y-4 mb-8 text-gray-600">
                        <li className="flex items-start"><span className="text-[#5c6df5] mr-3">✓</span> Psychometric assessment to measure your interests, personality and abilities</li>
                        <li className="flex items-start"><span className="text-[#5c6df5] mr-3">✓</span> 3 career counselling sessions</li>
                        <li className="flex items-start"><span className="text-[#5c6df5] mr-3">✓</span> Lifetime access to Knowledge Gateway</li>
                        <li className="flex items-start"><span className="text-[#5c6df5] mr-3">✓</span> Attend live webinars by industry experts</li>
                        <li className="flex items-start"><span className="text-[#5c6df5] mr-3">✓</span> Customised reports after each session with information on certificates/online courses</li>
                        <li className="flex items-start"><span className="text-[#5c6df5] mr-3">✓</span> Guidance on studying abroad</li>
                        <li className="flex items-start"><span className="text-[#5c6df5] mr-3">✓</span> CV reviews for job application</li>
                      </ul>
                    </>
                  ) : null}
                  <div className="flex justify-center mt-auto">
                    <button className="bg-[#3b49df] hover:bg-[#2b39cf] text-white text-xs font-bold py-3 px-12 rounded-full transition-colors relative z-20">BUY NOW</button>
                  </div>
                </div>

              </div>
            </div>
          </>
        ) : (
          <div className="w-full max-w-6xl mx-auto mt-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Want To Customise Your Mentorship Plan?</h2>
              <p className="text-gray-600 text-sm max-w-2xl mx-auto">If you want to subscribe to specific services from Mentoria that resolve your career challenges, you can choose one or more of the following:</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="border border-gray-200 rounded-lg p-6 bg-white flex flex-col items-start shadow-sm">
                <div className="w-24 h-24 bg-blue-100 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-3xl text-blue-500">📄</span>
                </div>
                <h3 className="font-bold text-blue-900 text-sm">CV Building</h3>
                <p className="font-bold text-gray-800 text-sm mb-2">₹2000</p>
                <p className="text-xs text-gray-500 mb-4 flex-grow">Is your CV making a great first impression on your behalf? Our HR experts will help you build the kind of CV that stands out from the crowd and increases your chances of getting interview calls.</p>
                <button className="bg-[#5c6df5] text-white text-xs font-bold py-2 px-6 rounded">BUY NOW</button>
              </div>

              {/* Card 2 */}
              <div className="border border-gray-200 rounded-lg p-6 bg-white flex flex-col items-start shadow-sm">
                <div className="w-24 h-24 bg-blue-500 rounded-md mb-4 flex items-center justify-center text-white text-4xl font-bold">in</div>
                <h3 className="font-bold text-blue-900 text-sm">LinkedIn Profile Building</h3>
                <p className="font-bold text-gray-800 text-sm mb-2">₹2000</p>
                <p className="text-xs text-gray-500 mb-4 flex-grow">Revamp your LinkedIn profile with recommendations from recruitment experts to showcase your career journey and increase your chances of interview calls.</p>
                <button className="bg-[#5c6df5] text-white text-xs font-bold py-2 px-6 rounded">BUY NOW</button>
              </div>

              {/* Card 3 */}
              <div className="border border-gray-200 rounded-lg p-6 bg-white flex flex-col items-start shadow-sm">
                <div className="w-24 h-24 bg-blue-200 rounded-md mb-4 flex items-center justify-center space-x-2">
                  <span className="text-2xl text-blue-500">📄</span>
                  <span className="text-2xl text-blue-600 font-bold">in</span>
                </div>
                <h3 className="font-bold text-blue-900 text-sm">LinkedIn Profile + CV Building</h3>
                <p className="font-bold text-gray-800 text-sm mb-2">₹3500</p>
                <p className="text-xs text-gray-500 mb-4 flex-grow">Build the kind of profile recruiters would love to spend time on. Get your CV and LinkedIn profile built by our HR/Recruitment experts.</p>
                <button className="bg-[#5c6df5] text-white text-xs font-bold py-2 px-6 rounded">BUY NOW</button>
              </div>

              {/* Card 4 */}
              <div className="border border-gray-200 rounded-lg p-6 bg-white flex flex-col items-start shadow-sm">
                <div className="w-24 h-24 bg-slate-700 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-3xl text-yellow-500">💼</span>
                </div>
                <h3 className="font-bold text-blue-900 text-sm">Job Application Strategy</h3>
                <p className="font-bold text-gray-800 text-sm mb-2">₹4000</p>
                <p className="text-xs text-gray-500 mb-4 flex-grow">Build the right pipeline for job interviews through a customised job application tracker with information on companies, job postings and steps you need to follow to land your dream job.</p>
                <button className="bg-[#5c6df5] text-white text-xs font-bold py-2 px-6 rounded">BUY NOW</button>
              </div>

              {/* Card 5 */}
              <div className="border border-gray-200 rounded-lg p-6 bg-white flex flex-col items-start shadow-sm">
                <div className="w-24 h-24 bg-orange-100 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-3xl text-orange-400">📊</span>
                </div>
                <h3 className="font-bold text-blue-900 text-sm">Career Report</h3>
                <p className="font-bold text-gray-800 text-sm mb-2">₹2500</p>
                <p className="text-xs text-gray-500 mb-4 flex-grow">Get a detailed report of your psychometric assessment for a scientific analysis of your interests, personality and abilities. Find out where your interests lie and which future paths you can potentially consider.</p>
                <button className="bg-[#5c6df5] text-white text-xs font-bold py-2 px-6 rounded">BUY NOW</button>
              </div>

              {/* Card 6 */}
              <div className="border border-gray-200 rounded-lg p-6 bg-white flex flex-col items-start shadow-sm">
                <div className="w-24 h-24 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-3xl text-gray-600">📝</span>
                </div>
                <h3 className="font-bold text-blue-900 text-sm">Career Report + Career Counselling</h3>
                <p className="font-bold text-gray-800 text-sm mb-2">₹6000</p>
                <p className="text-xs text-gray-500 mb-4 flex-grow">Connect with India's top career coaches to analyse your psychometric report, get a detailed action plan for your development areas and shortlist the top three career paths you're most likely to enjoy and excel at.</p>
                <button className="bg-[#5c6df5] text-white text-xs font-bold py-2 px-6 rounded">BUY NOW</button>
              </div>

              {/* Card 7 */}
              <div className="border border-gray-200 rounded-lg p-6 bg-white flex flex-col items-start shadow-sm">
                <div className="w-24 h-24 bg-yellow-100 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-3xl text-red-500">▶️</span>
                </div>
                <h3 className="font-bold text-blue-900 text-sm">Knowledge Gateway + Career Helpline Access</h3>
                <p className="font-bold text-gray-800 text-sm mb-2">₹250/month</p>
                <p className="text-xs text-gray-500 mb-4 flex-grow">Unlock holistic information on your career paths and get direct access to Mentoria's experts, who will resolve your career-related queries through our dedicated Career Helpline. Validate your career decisions from now until you land a job you love.</p>
                <button className="bg-[#5c6df5] text-white text-xs font-bold py-2 px-6 rounded">BUY NOW</button>
              </div>

              {/* Card 8 */}
              <div className="border border-gray-200 rounded-lg p-6 bg-white flex flex-col items-start shadow-sm">
                <div className="w-24 h-24 bg-green-100 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-3xl text-green-500">💬</span>
                </div>
                <h3 className="font-bold text-blue-900 text-sm">One-to-One Session with a Career Expert</h3>
                <p className="font-bold text-gray-800 text-sm mb-2">₹3500 per interaction for 1 hour</p>
                <p className="text-xs text-gray-500 mb-4 flex-grow">Resolve your career queries and glimpse into your future world through a one-on-one session with an expert from your chosen field.</p>
                <button className="bg-[#5c6df5] text-white text-xs font-bold py-2 px-6 rounded">BUY NOW</button>
              </div>

              {/* Card 9 */}
              <div className="border border-gray-200 rounded-lg p-6 bg-white flex flex-col items-start shadow-sm">
                <div className="w-24 h-24 bg-teal-100 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-3xl text-teal-600">🌍</span>
                </div>
                <h3 className="font-bold text-blue-900 text-sm">Overseas Admission Planner</h3>
                <p className="font-bold text-gray-800 text-sm mb-2">₹3000 for a planner with top 10 colleges in India OR any 1 country abroad</p>
                <p className="text-xs text-gray-500 mb-4 flex-grow">Planning your masters studies? Get unbiased recommendations and details on your future college options in India and abroad, organised in one resourceful planner.</p>
                <button className="bg-[#5c6df5] text-white text-xs font-bold py-2 px-6 rounded">BUY NOW</button>
              </div>

              {/* Card 10 */}
              <div className="border border-gray-200 rounded-lg p-6 bg-white flex flex-col items-start shadow-sm">
                <div className="w-24 h-24 bg-teal-100 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-3xl text-teal-600">🌎</span>
                </div>
                <h3 className="font-bold text-blue-900 text-sm">Overseas Admission: SOP Brainstorm</h3>
                <p className="font-bold text-gray-800 text-sm mb-2">₹3000 for a one-hour session</p>
                <p className="text-xs text-gray-500 mb-4 flex-grow">Increase your chances of getting admissions in your dream college by structuring your SOP in the most ideal manner through discussions with an overseas admissions expert.</p>
                <button className="bg-[#5c6df5] text-white text-xs font-bold py-2 px-6 rounded">BUY NOW</button>
              </div>

              {/* Card 11 */}
              <div className="border border-gray-200 rounded-lg p-6 bg-white flex flex-col items-start shadow-sm">
                <div className="w-24 h-24 bg-teal-100 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-3xl text-teal-600">🌏</span>
                </div>
                <h3 className="font-bold text-blue-900 text-sm">Overseas Admission: SOP Review</h3>
                <p className="font-bold text-gray-800 text-sm mb-2">₹2500</p>
                <p className="text-xs text-gray-500 mb-4 flex-grow">Is your SOP/Essay good enough to get you shortlisted? Get it reviewed by our team of overseas admissions experts to make sure you make the cut.</p>
                <button className="bg-[#5c6df5] text-white text-xs font-bold py-2 px-6 rounded">BUY NOW</button>
              </div>

              {/* Card 12 */}
              <div className="border border-gray-200 rounded-lg p-6 bg-white flex flex-col items-start shadow-sm">
                <div className="w-24 h-24 bg-blue-50 rounded-md mb-4 flex items-center justify-center">
                  <span className="text-3xl text-blue-900">👨‍💼</span>
                </div>
                <h3 className="font-bold text-blue-900 text-sm">Interview Prep Session</h3>
                <p className="font-bold text-gray-800 text-sm mb-2">₹2000</p>
                <p className="text-xs text-gray-500 mb-4 flex-grow">Ace your upcoming interviews with guidance from India's top HR experts and increase your chances of landing your dream job.</p>
                <button className="bg-[#5c6df5] text-white text-xs font-bold py-2 px-6 rounded">BUY NOW</button>
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}
