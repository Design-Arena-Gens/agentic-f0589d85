'use client';

import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50" dir="rtl">
      {/* Header */}
      <header className="bg-gradient-to-l from-blue-600 to-indigo-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center mb-2">
            العقلانية الاقتصادية
          </h1>
          <p className="text-xl text-center text-blue-100">
            رافعة أساسية للحوكمة الرشيدة العالمية
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-reverse space-x-8 py-4">
            {[
              { id: 'home', label: 'الرئيسية' },
              { id: 'concept', label: 'المفهوم' },
              { id: 'importance', label: 'الأهمية' },
              { id: 'challenges', label: 'التحديات' },
              { id: 'solutions', label: 'الحلول' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Home Section */}
        {activeSection === 'home' && (
          <section className="space-y-8 animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                مرحباً بكم في الملتقى
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                يسعدنا أن نرحب بكم في هذا الملتقى المخصص لدراسة وتحليل دور العقلانية الاقتصادية كرافعة أساسية للحوكمة الرشيدة على المستوى العالمي.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">الهدف</h3>
                  <p className="text-gray-700">
                    تعزيز الفهم حول كيفية تطبيق العقلانية الاقتصادية في صنع القرارات العالمية
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
                  <div className="text-4xl mb-3">🌍</div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">النطاق</h3>
                  <p className="text-gray-700">
                    تحليل التأثيرات على الاقتصاد العالمي والسياسات الدولية
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
                  <div className="text-4xl mb-3">💡</div>
                  <h3 className="text-xl font-bold text-purple-800 mb-2">الرؤية</h3>
                  <p className="text-gray-700">
                    بناء إطار عمل متكامل لتحقيق حوكمة رشيدة مبنية على أسس اقتصادية سليمة
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Concept Section */}
        {activeSection === 'concept' && (
          <section className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">مفهوم العقلانية الاقتصادية</h2>

              <div className="space-y-6">
                <div className="border-r-4 border-blue-600 pr-4">
                  <h3 className="text-2xl font-semibold text-blue-700 mb-3">التعريف الأساسي</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    العقلانية الاقتصادية هي نهج منهجي لاتخاذ القرارات يعتمد على تحليل التكاليف والفوائد،
                    وتعظيم المنفعة، والاستخدام الأمثل للموارد المتاحة في ظل القيود الموجودة.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h4 className="text-xl font-bold text-blue-800 mb-3">المبادئ الأساسية</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 ml-2">✓</span>
                        <span>الكفاءة في تخصيص الموارد</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 ml-2">✓</span>
                        <span>الشفافية في العمليات الاقتصادية</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 ml-2">✓</span>
                        <span>المساءلة المالية والإدارية</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 ml-2">✓</span>
                        <span>الاستدامة طويلة المدى</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-indigo-50 p-6 rounded-xl">
                    <h4 className="text-xl font-bold text-indigo-800 mb-3">المكونات الرئيسية</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-indigo-600 ml-2">•</span>
                        <span>تحليل البيانات الاقتصادية</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 ml-2">•</span>
                        <span>نماذج اتخاذ القرارات</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 ml-2">•</span>
                        <span>تقييم المخاطر والعوائد</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-600 ml-2">•</span>
                        <span>التخطيط الاستراتيجي</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Importance Section */}
        {activeSection === 'importance' && (
          <section className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">أهمية العقلانية الاقتصادية في الحوكمة</h2>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
                    <div className="text-3xl mb-3">📊</div>
                    <h3 className="text-xl font-bold text-green-800 mb-3">على المستوى الوطني</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• تحسين كفاءة الإنفاق العام</li>
                      <li>• تعزيز الاستقرار الاقتصادي</li>
                      <li>• تحقيق التنمية المستدامة</li>
                      <li>• زيادة ثقة المستثمرين</li>
                      <li>• تقليل الفساد والهدر</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-2 border-blue-200">
                    <div className="text-3xl mb-3">🌐</div>
                    <h3 className="text-xl font-bold text-blue-800 mb-3">على المستوى الدولي</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• تعزيز التعاون الاقتصادي العالمي</li>
                      <li>• تحقيق العدالة في التجارة الدولية</li>
                      <li>• إدارة الأزمات الاقتصادية العالمية</li>
                      <li>• تنسيق السياسات النقدية والمالية</li>
                      <li>• مكافحة التهرب الضريبي الدولي</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl border-2 border-purple-200 mt-6">
                  <h3 className="text-2xl font-bold text-purple-800 mb-4">التأثيرات الإيجابية</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-4xl mb-2">💰</div>
                      <p className="font-semibold text-purple-800">النمو الاقتصادي</p>
                      <p className="text-sm text-gray-600 mt-1">زيادة الناتج المحلي الإجمالي</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-2">👥</div>
                      <p className="font-semibold text-purple-800">الرفاه الاجتماعي</p>
                      <p className="text-sm text-gray-600 mt-1">تحسين مستوى المعيشة</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl mb-2">🔒</div>
                      <p className="font-semibold text-purple-800">الأمن الاقتصادي</p>
                      <p className="text-sm text-gray-600 mt-1">استقرار الأسواق المالية</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Challenges Section */}
        {activeSection === 'challenges' && (
          <section className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">التحديات التي تواجه تطبيق العقلانية الاقتصادية</h2>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-6 rounded-xl border-r-4 border-red-500">
                    <h3 className="text-xl font-bold text-red-800 mb-4">⚠️ تحديات سياسية</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="pb-2 border-b border-red-200">
                        <span className="font-semibold">الضغوط السياسية:</span> تأثير المصالح الحزبية على القرارات الاقتصادية
                      </li>
                      <li className="pb-2 border-b border-red-200">
                        <span className="font-semibold">الشعبوية الاقتصادية:</span> اتخاذ قرارات قصيرة المدى لكسب الشعبية
                      </li>
                      <li>
                        <span className="font-semibold">الصراعات الدولية:</span> التوترات الجيوسياسية تعيق التعاون الاقتصادي
                      </li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-xl border-r-4 border-orange-500">
                    <h3 className="text-xl font-bold text-orange-800 mb-4">📉 تحديات اقتصادية</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="pb-2 border-b border-orange-200">
                        <span className="font-semibold">عدم اليقين:</span> صعوبة التنبؤ بالتطورات الاقتصادية
                      </li>
                      <li className="pb-2 border-b border-orange-200">
                        <span className="font-semibold">الأزمات المالية:</span> التقلبات المفاجئة في الأسواق العالمية
                      </li>
                      <li>
                        <span className="font-semibold">عدم المساواة:</span> الفجوة المتزايدة بين الدول الغنية والفقيرة
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-xl border-r-4 border-yellow-500">
                    <h3 className="text-xl font-bold text-yellow-800 mb-4">🔧 تحديات تقنية</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="pb-2 border-b border-yellow-200">
                        <span className="font-semibold">نقص البيانات:</span> عدم توفر معلومات دقيقة وشاملة
                      </li>
                      <li className="pb-2 border-b border-yellow-200">
                        <span className="font-semibold">القدرات المؤسسية:</span> ضعف الأنظمة والإجراءات
                      </li>
                      <li>
                        <span className="font-semibold">التكنولوجيا:</span> الحاجة لأدوات تحليل متطورة
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-xl border-r-4 border-purple-500">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">🧠 تحديات ثقافية واجتماعية</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="pb-2 border-b border-purple-200">
                        <span className="font-semibold">المقاومة للتغيير:</span> تمسك بعض المجتمعات بالأساليب التقليدية
                      </li>
                      <li className="pb-2 border-b border-purple-200">
                        <span className="font-semibold">نقص الوعي:</span> عدم فهم أهمية العقلانية الاقتصادية
                      </li>
                      <li>
                        <span className="font-semibold">الفساد:</span> انتشار الممارسات غير الأخلاقية
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Solutions Section */}
        {activeSection === 'solutions' && (
          <section className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">الحلول والتوصيات</h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-300">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">💡 استراتيجيات التنفيذ</h3>

                  <div className="space-y-4">
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h4 className="text-lg font-bold text-green-700 mb-2">1. تعزيز الإطار المؤسسي</h4>
                      <ul className="text-gray-700 space-y-1 mr-4">
                        <li>• إنشاء هيئات رقابية مستقلة</li>
                        <li>• تطوير القوانين والتشريعات الاقتصادية</li>
                        <li>• تعزيز الشفافية والمساءلة</li>
                        <li>• تحديث الأنظمة الإدارية والمالية</li>
                      </ul>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h4 className="text-lg font-bold text-blue-700 mb-2">2. بناء القدرات البشرية</h4>
                      <ul className="text-gray-700 space-y-1 mr-4">
                        <li>• برامج تدريب للمسؤولين الحكوميين</li>
                        <li>• التعليم الاقتصادي للمواطنين</li>
                        <li>• تطوير الخبرات المحلية</li>
                        <li>• التبادل المعرفي الدولي</li>
                      </ul>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h4 className="text-lg font-bold text-purple-700 mb-2">3. التكنولوجيا والابتكار</h4>
                      <ul className="text-gray-700 space-y-1 mr-4">
                        <li>• استخدام الذكاء الاصطناعي في التحليل الاقتصادي</li>
                        <li>• منصات البيانات المفتوحة</li>
                        <li>• أنظمة المراقبة والتقييم الإلكترونية</li>
                        <li>• تقنيات البلوكتشين للشفافية</li>
                      </ul>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm">
                      <h4 className="text-lg font-bold text-indigo-700 mb-2">4. التعاون الدولي</h4>
                      <ul className="text-gray-700 space-y-1 mr-4">
                        <li>• تنسيق السياسات الاقتصادية العالمية</li>
                        <li>• تبادل أفضل الممارسات</li>
                        <li>• دعم الدول النامية</li>
                        <li>• إنشاء آليات للحوار الاقتصادي</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-blue-100 p-6 rounded-xl text-center">
                    <div className="text-4xl mb-3">🎯</div>
                    <h4 className="font-bold text-blue-900 mb-2">الأهداف قصيرة المدى</h4>
                    <p className="text-sm text-gray-700">
                      تحسين الشفافية وتعزيز المساءلة في المؤسسات الحكومية
                    </p>
                  </div>
                  <div className="bg-indigo-100 p-6 rounded-xl text-center">
                    <div className="text-4xl mb-3">📈</div>
                    <h4 className="font-bold text-indigo-900 mb-2">الأهداف متوسطة المدى</h4>
                    <p className="text-sm text-gray-700">
                      بناء القدرات المؤسسية وتطوير الأنظمة الاقتصادية
                    </p>
                  </div>
                  <div className="bg-purple-100 p-6 rounded-xl text-center">
                    <div className="text-4xl mb-3">🌟</div>
                    <h4 className="font-bold text-purple-900 mb-2">الأهداف طويلة المدى</h4>
                    <p className="text-sm text-gray-700">
                      تحقيق حوكمة رشيدة مستدامة على المستوى العالمي
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-l from-gray-800 to-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-2">الملتقى الدولي</p>
          <p className="text-gray-400">العقلانية الاقتصادية رافعة أساسية للحوكمة الرشيدة العالمية</p>
          <p className="text-sm text-gray-500 mt-4">2024 © جميع الحقوق محفوظة</p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </main>
  );
}
