// لعبة تفاعلية بسيطة: سيناريوهات + تصويت + نتائج
const app = (function(){
  // بيانات السيناريوهات: أربعة مرضى، كل مريض 3 جولات، كل جولة 3 قضايا، كل قضية 3 خيارات
  const patients = [
    {
      id: 'diabetes',
      title: 'السكري — عم علي',
      desc: 'عم علي، سبعيني، مريض سكر نوع 2 من عشر سنين. بنسَه المواعيد، وأبنه مهتم كتير. لازم نراعي تفضيلاته وعاداته.',
      rounds: [
        // Round 1 (we already described earlier)
        {
          title: 'الجولة 1: الأدوية، الأكل، العناية بالقدم',
          questions: [
            {
              id: '1A',
              text: 'المتابعة الدوائية — عم علي بينسى أقراص الصبح والدكتور عايز يزوّد الجرعة. تعملوا إيه؟',
              options: [
                { id:'1', text: 'نسأل عم علي عن روتينه، نكتشف سبب النسيان، ونضع خطة تذكير مع احترام اختياره وإشراك الابن بموافقته.' , tag:'patient-centered'},
                { id:'2', text: 'نزوّد الجرعة كما اقترح الدكتور بسرعة دون نقاش واسع.' , tag:'partial'},
                { id:'3', text: 'نلومه ونغيّر الدواء لأقوى بدون شرح.' , tag:'poor'}
              ]
            },
            {
              id: '1B',
              text: 'التغذية وإشراك العيلة — الابن يطبخ أكلات تقليدية غنية. تعملوا إيه؟',
              options: [
                { id:'1', text: 'نجلس مع الأب والابن ونقدم وصفات مصرية صحية ونحترم تفضيلات عم علي.' , tag:'patient-centered'},
                { id:'2', text: 'نوزّع بروشورات عامة بدون تخصيص أو مناقشة تطبيقها.' , tag:'partial'},
                { id:'3', text: 'نمنع كل الأكلات التقليدية بالقوة.' , tag:'poor'}
              ]
            },
            {
              id: '1C',
              text: 'العناية بالقدم — عم علي حاسس بتنميل ومش بيفحص رجله. تعملوا إيه؟',
              options: [
                { id:'1', text: 'نعلّمه فحصًا بسيطًا يوميًا ونحدد فحوص دورية ونشرك العيلة لو يريد.' , tag:'patient-centered'},
                { id:'2', text: 'نحجز له عند أخصائي أقدام بدون تمكين يومي.' , tag:'partial'},
                { id:'3', text: 'نؤجّل الموضوع وننتظر ألمًا كبيرًا.' , tag:'poor'}
              ]
            }
          ]
        },
        // Round 2
        {
          title: 'الجولة 2: النشاط، الأدوية المتعددة، وصعوبات مالية',
          questions: [
            {
              id:'2A',
              text: 'النشاط البدني — عم علي يقول: أنا تعبت والتمارين مش ليا. تعملوا إيه؟',
              options:[
                { id:'1', text:'نصمم معه برنامج نشاط بسيط يناسب قدرته اليومية ونربطه بنشاط يحبّه (مثل المشي مع الجيران).' , tag:'patient-centered'},
                { id:'2', text:'نوصي ببرنامج تمارين قياسي بدون تعديل.' , tag:'partial'},
                { id:'3', text:'نقلّه أنّه لازم يركض يوميًا وإلا المشكلات هتكتر.' , tag:'poor'}
              ]
            },
            {
              id:'2B',
              text: 'تعدد الأدوية — عنده أدوية للقلب وضغط وسكر. يعملوا إيه؟',
              options:[
                { id:'1', text:'نراجع جميع الأدوية معه ونبسط الجدول، نشرح تداخلات، ونشارك الصيدلي في تعليم المريض.' , tag:'patient-centered'},
                { id:'2', text:'نضيف دواء آخر للتعويض بدون مراجعة قائمة الأدوية.' , tag:'partial'},
                { id:'3', text:'نقترح إيقاف بعض الأدوية فجأة دون مناقشة.' , tag:'poor'}
              ]
            },
            {
              id:'2C',
              text: 'صعوبات مالية — عم علي يقلق من تكلفة الفحوصات والعلاج. تعملوا إيه؟',
              options:[
                { id:'1', text:'نناقش خيارات علاجية أقل كلفة، نشير لبرامج دعم محلية ونأخذ قراره بعد الشرح.' , tag:'patient-centered'},
                { id:'2', text:'نقترح دواء أغلى لكن نكتم الموضوع.' , tag:'partial'},
                { id:'3', text:'نقوله إن الفلوس ليست عذراً وأنه يجب أن يتحمل.' , tag:'poor'}
              ]
            }
          ]
        },
        // Round 3
        {
          title: 'الجولة 3: خطة متابعة طويلة الأمد والتمكين',
          questions:[
            {
              id:'3A',
              text:'المشاركة في القرار — الدكتور مستعجل ويعرض خطة علاجية جاهزة. تعملوا إيه؟',
              options:[
                { id:'1', text:'نشرح خيارات العلاج مع عم علي ونأخذ تفضيلاته ونوصل لاتفاق مشترك.' , tag:'patient-centered'},
                { id:'2', text:'ننفّذ خطة الدكتور لأن الوقت ضيق.' , tag:'partial'},
                { id:'3', text:'نفرض خطة علاجية دون استشارته.' , tag:'poor'}
              ]
            },
            {
              id:'3B',
              text:'تعليم المريض — عم علي يريد يفهم كيف يقرأ قياسات السكر. تعملوا إيه؟',
              options:[
                { id:'1', text:'نعلّمه قراءة الجهاز عمليًا ونعطيه ورقة وجدول مبسّط ويسجّل' , tag:'patient-centered'},
                { id:'2', text:'نقول له اقرَ القياس لكن دون تدريب عملي.' , tag:'partial'},
                { id:'3', text:'نُخذ الجهاز ونقرأ نحن فقط.' , tag:'poor'}
              ]
            },
            {
              id:'3C',
              text:'خطة طوارئ — عم علي مش عارف يتصرف لو صار هبوط مفاجئ في السكر. تعملوا إيه؟',
              options:[
                { id:'1', text:'نزوّده بخطة طوارئ مكتوبة وبسيطة ونعلّم العائلة وماذا تفعل ومتى تزور الطوارئ.' , tag:'patient-centered'},
                { id:'2', text:'نقوله: "اتصل بالطوارئ إذا شعرت بتعب شديد" بدون تفاصيل.' , tag:'partial'},
                { id:'3', text:'ما نستخدمش خطة طوارئ ونعتمد على الحظ.' , tag:'poor'}
              ]
            }
          ]
        }
      ]
    },

    // Patient 2: Cardiovascular
    {
      id:'cardio',
      title: 'أمراض القلب — الحاجة فاطمة',
      desc: 'فاطمة، 62 سنة، عندها تاريخ ارتفاع ضغط وشعور بألم صدر خفيف أحيانًا، وتحب تكون مشاركة في قرارات علاجها.',
      rounds:[
        {
          title:'الجولة 1: التحكم في الضغط وطرق حياتية',
          questions:[
            {
              id:'c1A',
              text:'تعديل نظام الدواء لضغط الدم بعد قياسات متغيرة. تعملوا إيه؟',
              options:[
                { id:'1', text:'نراجع قياساتها المتكررة معها، نناقش المخاطر والمنافع ونصمم خطة تعديل مشتركة.' , tag:'patient-centered'},
                { id:'2', text:'نعدّل الدواء فوراً بدون مناقشتها لأن النتائج متقلبة.' , tag:'partial'},
                { id:'3', text:'نتجاهل القياسات ونعتمد على زيارة واحدة سنوية.' , tag:'poor'}
              ]
            },
            {
              id:'c1B',
              text:'ألم صدر خفيف — هل نرسلها للـER أم نراقب؟',
              options:[
                { id:'1', text:'نشرح الأعراض الخطرة ونضع خطة واضحة لمتى تذهب للـER ونرتب فحص قريب.' , tag:'patient-centered'},
                { id:'2', text:'نراقب بالأشهر القادمة دون إرشاد واضح.' , tag:'partial'},
                { id:'3', text:'نقلل من شأن الشكوى ونقترح تجاهلها.' , tag:'poor'}
              ]
           },
            {
              id:'c1C',
              text:'إشراك الأسرة — بنتها تريد تتدخل في كل قرار. تعملوا إيه؟',
              options:[
                { id:'1', text:'نستعين بمحادثة يشارك فيها فاطمة وبنتها ونوضح أدوار كل واحد مع احترام خصوصية المريضة.' , tag:'patient-centered'},
                { id:'2', text:'نطلب من البنت حضور الفحص دون معرفة المريضة بما سنناقشه.' , tag:'partial'},
                { id:'3', text:'نمنع البنت من الحضور كليةً.' , tag:'poor'}
              ]
            }
          ]
        },
        {
          title:'الجولة 2: نمط الحياة، مواعيد طبية، وأهداف علاجية',
          questions:[
            {
              id:'c2A',
              text:'التمارين والوزن — فاطمة تخاف من التعب. تعملوا إيه؟',
              options:[
                { id:'1', text:'نضع أهداف وزن وتمارين قابلة للتحقيق معها وندعمها بتتبع بسيط' , tag:'patient-centered'},
                { id:'2', text:'نكتب برنامج شاق ونطلب الالتزام دون تعديل.' , tag:'partial'},
                { id:'3', text:'نقول لها أن التمرين غير مهم.' , tag:'poor'}
              ]
            },
            {
              id:'c2B',
              text:'جدولة مواعيد متابعة مع أخصائي القلب. تعملوا إيه؟',
              options:[
                { id:'1', text:'نحدد مواعيد مناسبة لها ونرسّل تذكير وننقّح الخطة بناءً على تفضيلها.' , tag:'patient-centered'},
                { id:'2', text:'نحدد مواعيد بدون التنسيق مع المريضة.' , tag:'partial'},
                { id:'3', text:'نؤجل المواعيد لوقت غير معلوم.' , tag:'poor'}
              ]
            },
            {
              id:'c2C',
              text:'التدخين (ابنها يدخن في البيت). تعملوا إيه؟',
              options:[
                { id:'1', text:'نناقش حدود صحية للبيت ونقترح بدائل لإشراك العيلة في حماية فاطمة.' , tag:'patient-centered'},
                { id:'2', text:'نعطي نصائح عامة عن الإقلاع دون دعم عملي.' , tag:'partial'},
                { id:'3', text:'نأمر بأن لا يدخل أحد البيت مرة أخرى.' , tag:'poor'}
              ]
            }
          ]
        },
        {
          title:'الجولة 3: طوارئ وحياة يومية',
          questions:[
            {
              id:'c3A',
              text:'هل نعلم فاطمة كيف تقيس النبض والعلامات الخطرة؟',
              options:[
                { id:'1', text:'نعلمها بنفس عملي مبسط ونكتب إرشادات واضحة لما تفعل.' , tag:'patient-centered'},
                { id:'2', text:'نذكرها لفظيا فقط مرة واحدة.' , tag:'partial'},
                { id:'3', text:'نترك الموضوع للطبيب القادم.' , tag:'poor'}
              ]
            },
            {
              id:'c3B',
              text:'القرار بخصوص دواء منع تخثر جديد له فوائد ومخاطر. تعملوا إيه؟',
              options:[
                { id:'1', text:'نشرح مخاطر وفوائد ونسأل عن تفضيلها ونأخذ قرارًا مشتركًا.' , tag:'patient-centered'},
                { id:'2', text:'نفرض الدواء لأنه الأكثر أمانًا طبياً.' , tag:'partial'},
                { id:'3', text:'نمتنع عن نقاش الخيارات ونعطي دواء عشوائياً.' , tag:'poor'}
              ]
            },
            {
              id:'c3C',
              text:'خطة للطوارئ المنزلية عند ازمة قلبية. تعملوا إيه؟',
              options:[
                { id:'1', text:'نزوّد خطة مكتوبة ونمرن الأسرة على إجراءات الإسعاف الأولي.' , tag:'patient-centered'},
                { id:'2', text:'نطلب منها حفظ رقم الطوارئ فقط.' , tag:'partial'},
                { id:'3', text:'لا خطة.' , tag:'poor'}
              ]
            }
          ]
        }
      ]
    },

    // Patient 3: CKD (Chronic Kidney Disease)
    {
      id:'ckd',
      title:'مرض كلوي مزمن — أبو حسّان',
      desc:'أبو حسن، 58 سنة، عنده CKD مرحلة متوسطة، قلقان من تغيّر نظامه الغذائي والديالِز مستقبلًا.',
      rounds:[
        {
          title:'الجولة 1: النظام الغذائي والإحساس بالخوف',
          questions:[
            {
              id:'k1A',
              text:'تعديل البروتين والصوديوم في الأكل. تعملوا إيه؟',
              options:[
                { id:'1', text:'نشرح له خيارات غذائية ملموسة ونشارك العائلة بشأن وصفات أقل ملحًا مع الحفاظ على طعمه.' , tag:'patient-centered'},
                { id:'2', text:'نعطيه قائمة أطعمة ممنوعة بدون بدائل.' , tag:'partial'},
                { id:'3', text:'نفرض حمية صارمة دون تهيئة.' , tag:'poor'}
              ]
            },
            {
              id:'k1B',
              text:'الخوف من الديالِز في المستقبل. تعملوا إيه؟',
              options:[
                { id:'1', text:'نناقش السيناريوهات الممكنة بواقعية ونزوده بمعلومات عن الخيارات (ديالِز، زرع) ونأخذ قراره مشاركًا.' , tag:'patient-centered'},
                { id:'2', text:'نقول له: "لا تقلق" بدون تفاصيل.' , tag:'partial'},
                { id:'3', text:'نتركه يخاف دون توجيه.' , tag:'poor'}
              ]
            },
            {
              id:'k1C',
              text:'مراقبة الوظائف الكلوية والتواصل مع المريض. تعملوا إيه؟',
              options:[
                { id:'1', text:'نحدد مواعيد فحص منتظمة ونشرح ماذا تعني النتائج له.' , tag:'patient-centered'},
                { id:'2', text:'نرسل نتائج دون شرح.' , tag:'partial'},
                { id:'3', text:'ننتظر تدهور الحالة قبل المتابعة.' , tag:'poor'}
              ]
            }
          ]
        },
        {
          title:'الجولة 2: أدوية وتداخلات وعزل اجتماعي',
          questions:[
            {
              id:'k2A',
              text:'أدوية قد تؤثر على الكلى (مسكنات مثلاً). تعملوا إيه؟',
              options:[
                { id:'1', text:'نراجع معه كل المسكنات ونقدّم بدائل آمنة ونشرح لماذا.' , tag:'patient-centered'},
                { id:'2', text:'نمنعه من كل المسكنات بدون شرح.' , tag:'partial'},
                { id:'3', text:'نصف له مسكنات قوية دون مراجعة.' , tag:'poor'}
              ]
            },
            {
              id:'k2B',
              text:'أثر المرض على العمل والحياة الاجتماعية. تعملوا إيه؟',
              options:[
                { id:'1', text:'نناقش تأثير المرض على عمله ونساعده في تعديل الروتين وتوفير مصادر دعم.' , tag:'patient-centered'},
                { id:'2', text:'نعطيه نصائح عامة دون تخطيط واضح.' , tag:'partial'},
                { id:'3', text:'نقترح أن يتوقف عن العمل فورًا.' , tag:'poor'}
              ]
            },
            {
              id:'k2C',
              text:'إشراك العائلة في الرعاية المنزلية. تعملوا إيه؟',
              options:[
                { id:'1', text:'نشرح للعائلة دورهم وننظم جلسة تعليمية صغيرة.' , tag:'patient-centered'},
                { id:'2', text:'نخبرهم بما يفعلون بدون تدريب.' , tag:'partial'},
                { id:'3', text:'نطلب منهم ترك الموضوع للمريض وحده.' , tag:'poor'}
              ]
            }
          ]
        },
        {
          title:'الجولة 3: قرار حول إحالة للمتابعة المتقدمة',
          questions:[
            {
              id:'k3A',
              text:'هل نحيل المريض لمركز كلى متخصص الآن؟',
              options:[
                { id:'1', text:'نناقش الفوائد والأعباء وننقل القرار بعد أخذ رأيه وظروفه.' , tag:'patient-centered'},
                { id:'2', text:'نحيل فورًا دون شرح كامل.' , tag:'partial'},
                { id:'3', text:'نؤجل الإحالة حتى تَزداد الأعراض.' , tag:'poor'}
              ]
            },
            {
              id:'k3B',
              text:'الاستعداد لخيارات مستقبلية (ديالِز/زرع) — تعملوا إيه؟',
              options:[
                { id:'1', text:'نزوّده بمعلومات مبسّطة ونبدأ تحضيرات تدريجية إذا أراد.' , tag:'patient-centered'},
                { id:'2', text:'نعطيه أوراق رسمية تحتاج لتوقيعات فقط.' , tag:'partial'},
                { id:'3', text:'نتجاهل التخطيط للمستقبل.' , tag:'poor'}
              ]
            },
            {
              id:'k3C',
              text:'تعليم ذاتي — هل نعلّمه قراءة نتائج وظائف الكلى؟',
              options:[
                { id:'1', text:'نعلّمه ونزوده بورقة توضيحية بسيطة ليتابع نتائج تحاليله.' , tag:'patient-centered'},
                { id:'2', text:'نذكره أن النتائج جيدة أو سيئة بدون تفاصيل.' , tag:'partial'},
                { id:'3', text:'لا نشرح النتائج.' , tag:'poor'}
              ]
            }
          ]
        }
      ]
    },

    // Patient 4: Epilepsy
    {
      id:'epilepsy',
      title:'الصرع — سعاد',
      desc:'سعاد، 28 سنة، مصابة بالصرع منذ الصغر. خافت بعد نوبة مؤخراً وتريد أن تكون جزءًا من الخطة العلاجية.',
      rounds:[
        {
          title:'الجولة 1: الأمان، الأدوية، والعمل',
          questions:[
            {
              id:'e1A',
              text:'الدواء المضاد للصرع يسبب نعاسًا يؤثر على عملها كمعلمة. تعملوا إيه؟',
              options:[
                { id:'1', text:'نراجع الجرعة ونناقش بدائل دوائية وأوقات تناسب جدول عملها مع مشاركتها في القرار.' , tag:'patient-centered'},
                { id:'2', text:'نخفض الجرعة بسرعة لتجنب النعاس دون تقييم مخاطر النوبات.' , tag:'partial'},
                { id:'3', text:'نخبرها أن تترك عملها لأن المرض لا يناسب المهنة.' , tag:'poor'}
              ]
            },
            {
              id:'e1B',
              text:'خطة الأمان في المنزل بعد نوبة: تعملوا إيه؟',
              options:[
                { id:'1', text:'نعد خطة أمان بسيطة للعائلة ونعلّمهم كيف يتصرفوا أثناء النوبة.' , tag:'patient-centered'},
                { id:'2', text:'نطلب من العائلة مراقبتها فقط دون تدريب.' , tag:'partial'},
                { id:'3', text:'نخبرهم أن يتركوا الأمر للوقت.' , tag:'poor'}
              ]
            },
            {
              id:'e1C',
              text:'سائق السيارة — هل تمنعها من القيادة؟',
              options:[
                { id:'1', text:'نراجع سجل النوبات مع سعاد ونناقش خيارات آمنة للقيادة ونحترم قوانين المرور المحلية.' , tag:'patient-centered'},
                { id:'2', text:'نمنعها فوراً من القيادة دون نقاش.' , tag:'partial'},
                { id:'3', text:'نسمح لها بالقيادة دون أي نقاش.' , tag:'poor'}
              ]
            }
          ]
        },
        {
          title:'الجولة 2: صحة نفسية وصداقة اجتماعية',
          questions:[
            {
              id:'e2A',
              text:'الخوف من الوصمة الاجتماعية — تعملوا إيه؟',
              options:[
                { id:'1', text:'نقدّم مشورة داعمة ونشجّع مجموعات دعم ونشركها في قرار مشاركة المعلومات.' , tag:'patient-centered'},
                { id:'2', text:'نقول لها أن تتجاهل آراء الناس.' , tag:'partial'},
                { id:'3', text:'نختار ألا نناقش التأثير النفسي.' , tag:'poor'}
              ]
            },
            {
              id:'e2B',
              text:'تخطيط الحمل (إن رغبت) مع أدوية تؤثر على الجنين. تعملوا إيه؟',
              options:[
                { id:'1', text:'نشرح المخاطر والبدائل ونخطط مع سعاد وبطبيبة نسائية إذا رغبت.' , tag:'patient-centered'},
                { id:'2', text:'نمنعها من الحمل بدون نقاش.' , tag:'partial'},
                { id:'3', text:'نطلب منها أن تختار وحدها دون معلومات.' , tag:'poor'}
              ]
            },
            {
              id:'e2C',
              text:'تتبع النوبات — تعملوا إيه؟',
              options:[
                { id:'1', text:'نزوّدها بتطبيق أو دفتر بسيط لتسجيل النوبات ونتابعه معها.' , tag:'patient-centered'},
                { id:'2', text:'نذكر أهمية التتبع لكنها نفعل لا أداة.' , tag:'partial'},
                { id:'3', text:'لا تتبع.' , tag:'poor'}
              ]
            }
          ]
        },
        {
          title:'الجولة 3: القرار حول تغيير دواء أو إجراء تشخيصي',
          questions:[
            {
              id:'e3A',
              text:'اقتراح إجراء تصوير متقدّم لتحديد بؤرة نوبات محتملة. تعملوا إيه؟',
              options:[
                { id:'1', text:'نشرح العملية، الفوائد، والمخاطر ونأخذ قرارًا مشتركًا بناء على تفضيلها.' , tag:'patient-centered'},
                { id:'2', text:'نصرّ عليها لإجراء الفحص دون تبرير.' , tag:'partial'},
                { id:'3', text:'نقترح تجاهل الفحص.' , tag:'poor'}
              ]
            },
            {
              id:'e3B',
              text:'تعديل دواء بسبب آثار جانبية جديدة. تعملوا إيه؟',
              options:[
                { id:'1', text:'نراجع الخيارات معها ونشاركها التحكم في القرار ونخطط متابعة.' , tag:'patient-centered'},
                { id:'2', text:'نغيّر الدواء فجأة دون تنسيق.' , tag:'partial'},
                { id:'3', text:'نغلق الملف دون تعديل.' , tag:'poor'}
              ]
            },
            {
              id:'e3C',
              text:'خطة للطوارئ في المدرسة أو مكان العمل. تعملوا إيه؟',
              options:[
                { id:'1', text:'نعد وثيقة وإجراءات مبسطة ونقوم بتدريب المعنيين إذا وافقت.' , tag:'patient-centered'},
                { id:'2', text:'نطلب منها إخبار الآخرين فقط.' , tag:'partial'},
                { id:'3', text:'لا خطة.' , tag:'poor'}
              ]
            }
          ]
        }
      ]
    }
  ];

  // حالة اللعبة:
  let state = {
    patientIndex: 0,
    roundIndex: 0,
    votes: {}, // structure: votes[patientId][roundIndex][questionId] = {name:..., choiceId:...}
  };

  // عناصر DOM
  const $story = document.getElementById('story');
  const $roundArea = document.getElementById('round-area');
  const $patientTitle = document.getElementById('patient-title');
  const $patientDesc = document.getElementById('patient-desc');
  const $questionList = document.getElementById('question-list');
  const $submitVotes = document.getElementById('submit-votes');
  const $nextRoundBtn = document.getElementById('next-round');
  const $roundResult = document.getElementById('round-result');
  const $finalArea = document.getElementById('final-area');
  const $finalSummary = document.getElementById('final-summary');
  const $nextPatient = document.getElementById('next-patient');
  const $restartGame = document.getElementById('restart-game');
  const $audienceName = document.getElementById('audience-name');

  // تهيئة العرض الأولي (قصة الجد)
  function showIntro(){
    const p = patients[0];
    $story.innerHTML = `<h2>حكايتي مع المرض — بصوت عم علي الجد</h2>
      <p>السلام عليكم يا ولاد — أنا عم علي، هاقصّ عليكم الحالات دى بالطريقة اللى بنفهمها سوا، وبعدين هنتصوت ونشوف نتائج اختياراتكم وتأثيرها الحقيقي. كل اختيار في اللعبة يمثّل أسلوب رعاية مختلف: متمحور بالمريض، جزئي، أو غير متمحور.</p>
      <p>اضغط "ابدأ الجولة" لما تكونوا جاهزين — وذاكروا تفضيلات المريض، المشاركة في القرار، وتعليم المريض وإشراك العيلة.</p>
      <button id="start-game" class="btn">ابدأ الجولة</button>`;
    document.getElementById('start-game').addEventListener('click', startGame);
    $roundArea.classList.add('hidden');
    $finalArea.classList.add('hidden');
  }

  // ابدأ اللعبة
  function startGame(){
    state.patientIndex = 0;
    state.roundIndex = 0;
    state.votes = {};
    $story.classList.add('hidden');
    $roundArea.classList.remove('hidden');
    renderCurrentRound();
  }
$roundArea.classList.add('fade-in');
setTimeout(() => $roundArea.classList.remove('fade-in'), 1000);

  // عرض الجولة الحالية
  function renderCurrentRound(){
    $roundResult.classList.add('hidden');
    $nextRoundBtn.classList.add('hidden');

    const patient = patients[state.patientIndex];
    const round = patient.rounds[state.roundIndex];

    $patientTitle.textContent = `${patient.title} — ${round.title}`;
    $patientDesc.textContent = patient.desc;

    $questionList.innerHTML = '';
    round.questions.forEach(q=>{
      const qDiv = document.createElement('div');
      qDiv.className='question';
      const qTitle = document.createElement('h4');
      qTitle.textContent = q.text;
      qDiv.appendChild(qTitle);

      q.options.forEach(opt=>{
        const optDiv = document.createElement('label');
        optDiv.className='option';
        const input = document.createElement('input');
        input.type='radio';
        input.name = q.id;
        input.value = opt.id;
        optDiv.appendChild(input);
        const span = document.createElement('span');
        span.textContent = opt.text;
        optDiv.appendChild(span);
        qDiv.appendChild(optDiv);
      });

      $questionList.appendChild(qDiv);
    });

    $submitVotes.disabled = false;
  }

  // احصل على اختيارات المصوت
  function collectVotes(){
    const patient = patients[state.patientIndex];
    const round = patient.rounds[state.roundIndex];
    const voter = $audienceName.value || 'جمهور';
    const result = {};
    let allAnswered = true;

    round.questions.forEach(q=>{
      const radios = document.getElementsByName(q.id);
      let selected = null;
      radios.forEach(r=>{ if(r.checked) selected = r.value; });
      if(!selected) allAnswered = false;
      result[q.id] = { voter, choiceId: selected };
    });

    return { allAnswered, votes: result };
  }

  // حساب الأغلبية في الجولة: نخرج tag الغالب patient-centered/partial/poor
  function evaluateRound() {
    const patient = patients[state.patientIndex];
    const round = patient.rounds[state.roundIndex];
    const tally = { 'patient-centered':0, 'partial':0, 'poor':0 };

    // نجمّع كل الأصوات المخزنة لهذه الجولة (في هذا المثال، نعامل كل مصوّت كواحد فقط - كل نقر حفظ واحد)
    // هنا نحتفظ بصوت واحد فقط (المستخدم الحالي)، ويمكن توسيع لتعدد المصوتين عبر قاعدة أو localStorage.
    const patientVotes = state.votes[patient.id] && state.votes[patient.id][state.roundIndex];
    if(!patientVotes){
      return { dominant: null, tally };
    }

    // لكل سؤال خذ الاختيار المُسجّل
    Object.keys(patientVotes).forEach(qid=>{
      const choiceId = patientVotes[qid].choiceId;
      const question = round.questions.find(x=>x.id===qid);
      const opt = question.options.find(o=>o.id===choiceId);
      if(opt) tally[opt.tag] += 1;
    });

    // تحديد الأغلبية
    let dominant = Object.keys(tally).reduce((a,b)=> tally[a]>=tally[b]?a:b);
    return { dominant, tally };
  }

  // عند إرسال الأصوات
  $submitVotes.addEventListener('click', ()=>{
    const { allAnswered, votes } = collectVotes();
    if(!allAnswered){
      alert('يرجى اختيار إجابة لكل سؤال قبل الإرسال.');
      return;
    }

    // خزّن صوت هذا الجمهور في الحالة
    const patient = patients[state.patientIndex];
    state.votes[patient.id] = state.votes[patient.id] || {};
    state.votes[patient.id][state.roundIndex] = votes;

    // قيّم الجولة وأظهر النتائج والعواقب الواقعية
    const { dominant, tally } = evaluateRound();
    showRoundOutcome(dominant, tally);
    $submitVotes.disabled = true;
    $nextRoundBtn.classList.remove('hidden');
  });

  // عرض نتيجة الجولة مع عواقبها الواقعية
  function showRoundOutcome(dominant, tally){
    $roundResult.classList.remove('hidden');
    $roundResult.classList.remove('success','warn','danger');
    let title='';
    let body='';

    if(dominant==='patient-centered'){
      title = 'نتيجة: Patient-Centered Care Champion';
      body = `أحسنتم — الأغلبية اختارت خيارات متمحورة حول المريض. التأثير الواقعي: المريض يشعر بالتمكين، الالتزام يتحسّن، ومخاطر المضاعفات تنخفض لأن الخطة مناسبة لحياته.`;
      $roundResult.classList.add('success');
    } else if(dominant==='partial'){
      title = 'نتيجة: Needs improvement — partly patient-centered';
      body = `الاختيارات كانت جزئية. التأثير الواقعي: قد يحدث تحسن لكن بعدم استمرارية بسبب نقص تمكين المريض أو نقص إشراك العائلة. ننصح بمزيد من الحوار والتعليم.`;
      $roundResult.classList.add('warn');
    } else {
      title = 'نتيجة: Disease-Focused / Not patient-centered';
      body = `الاختيارات كانت مركزة على المرض فقط أو إهمال للمريض. التأثير الواقعي: مقاومة للعلاج، زيادات في المضاعفات، وشعور بالإحباط لدى المريض. مهم إعادة التقييم مع إشراك المريض.`;
      $roundResult.classList.add('danger');
    }

    // أمثلة عواقب تفصيلية حسب المريض والجولة (نبَيّن واقعية)
    const patient = patients[state.patientIndex];
    const scenarioConsequences = generateConsequences(patient.id, state.roundIndex, dominant);

    $roundResult.innerHTML = `<h4>${title}</h4>
      <p>${body}</p>
      <div><strong>التصويت (تلخيص):</strong> متمحور=${tally['patient-centered']}, جزئي=${tally['partial']}, ضعيف=${tally['poor']}</div>
      <hr/>
      <div><strong>عواقب واقعية ممكنة:</strong><ul>${scenarioConsequences.map(x=>`<li>${x}</li>`).join('')}</ul></div>`;
  }

  // مولّد عواقب بسيطة يعتمد على المريض والجولة والنتيجة
  function generateConsequences(patientId, roundIndex, dominant){
    // أمثلة واقعية مبسطة
    const map = {
      'diabetes': [
        {
          patient: 'السكري — جولة 1',
          patientCentered:[
            'عم علي بدأ يلتزم بالأدوية بعدما طبقوا تذكير بسيط، وقياسات السكر استقرت.',
            'الابن تعلم وصفات مخففة وما فقدت الأسرة طعم الأكل.',
            'اكتشاف مبكّر لتنميل القدم والوقاية من قرح القدم.'
          ],
          partial:[
            'زيادة الجرعة أدت لتحسن بسيط لكن عم علي شعر بتعب من الدواء الجديد.',
            'الكتيبات لم تُطبّق فعليًا في البيت.',
            'تم حجز أخصائي لكن المريض لم يتعلم كيفية الفحص اليومي.'
          ],
          poor:[
            'نسيان الجرعات استمر لـمضاعفات، وظهرت مشاكل في تحكّم السكر.',
            'توتر بين الابن وعم علي بسبب القرارات المفروضة.',
            'تفاقم حالات القدم نتيجة الإهمال.'
          ]
        }
      ],
      'cardio':[ /* مبسّط */ 
        {
          patient:'cardio - round',
          patientCentered:[
            'تحسّن في ضبط الضغط بعد مشاركة فاطمة في خطة العلاج وزيارات منتظمة.',
            'العائلة أصبحت تدرك أعراض الطوارئ وتتصرف بسرعة.',
            'أهداف قابلة للتنفيذ تحسّن جودة الحياة.'
          ],
          partial:[
            'تعديل دواء دون تهيئة أدى لمتغيرات مؤقتة في الضغط.',
            'تذكيرات المواعيد غير كافية لالتزام دائم.'
          ],
          poor:[
            'إهمال الأعراض قاد لزيارة طارئة لاحقة.',
            'العائلة شعرت بالإقصاء مما زاد من التوتر.'
          ]
        }
      ],
      'ckd':[{
        patient:'ckd - round',
        patientCentered:[
          'تحسينات غذائية مع العائلة قللت احتباس السوائل وتحسّن شعور أبو حسن.',
          'التخطيط المبكر قلل قلقه حول الديالِز.',
        ],
        partial:[
          'حمية ممنوحة بدون بدائل أدّت لالتباس وتنفيذ جزئي.',
        ],
        poor:[
          'عدم التوجيه أدى لتدهور قصير الأمد وزيارات طارئة.',
        ]
      }],
      'epilepsy':[{
        patient:'epilepsy - round',
        patientCentered:[
          'سعاد تمكنت من مواصلة عملها بعد تعديل دوائي مناسب.',
          'خطط الطوارئ في المدرسة خففت القلق ونالت دعم زملائها.'
        ],
        partial:[
          'تغيير دواء سريع قلل النعاس لكنه رفع خطر النوبات مؤقتًا.',
        ],
        poor:[
          'الإهمال أدى لنوبات متكررة وزيادة وصمة نفسية.'
        ]
      }]
    };

    const list = (map[patientId] && map[patientId][0]) || null;
    if(!list) return ['لا توجد تفاصيل إضافية لهذه الحالة.'];

    if(dominant==='patient-centered') return list.patientCentered;
    if(dominant==='partial') return list.partial;
    return list.poor;
  }

  // عند الضغط التالي (جولة)
  $nextRoundBtn.addEventListener('click', ()=>{
    const patient = patients[state.patientIndex];
    if(state.roundIndex < patient.rounds.length - 1){
      state.roundIndex += 1;
      // نخفي النتيجة ونظهر الجولة التالية
      $roundResult.classList.add('hidden');
      renderCurrentRound();
    } else {
      // انتهينا من جولات هذا المريض
      showFinalSummaryForPatient();
    }
  });

  function showFinalSummaryForPatient(){
    const patient = patients[state.patientIndex];
    $finalArea.classList.remove('hidden');
    $roundArea.classList.add('hidden');

    // تقييم سريع: نعد الأغلبية في كل جولة
    const summaries = patient.rounds.map((r, idx)=>{
      const votesForRound = (state.votes[patient.id] && state.votes[patient.id][idx]) || null;
      if(!votesForRound) return `الجولة ${idx+1}: لم يتم التصويت`;
      // حساب ملخّص نفس الطريقة
      const tally = { 'patient-centered':0, 'partial':0, 'poor':0 };
      Object.keys(votesForRound).forEach(qid=>{
        const choiceId = votesForRound[qid].choiceId;
        const question = r.questions.find(q=>q.id===qid);
        const opt = question.options.find(o=>o.id===choiceId);
        if(opt) tally[opt.tag] += 1;
      });
      const dominant = Object.keys(tally).reduce((a,b)=> tally[a]>=tally[b]?a:b);
      return `الجولة ${idx+1}: ${dominant} (متمحور=${tally['patient-centered']}, جزئي=${tally['partial']}, ضعيف=${tally['poor']})`;
    });

    $finalSummary.innerHTML = `<h4>${patient.title}</h4>
      <p>${patient.desc}</p>
      <div><strong>ملخص الجولات:</strong><ul>${summaries.map(s=>`<li>${s}</li>`).join('')}</ul></div>
      <p>التركيز دائمًا: شارك المريض، احترم تفضيلاته، قدّم تعليمًا واضحًا، وأشرك العائلة عند اللزوم.</p>`;
  }

  // انتقال للمريض التالي
  $nextPatient.addEventListener('click', ()=>{
    state.patientIndex += 1;
    state.roundIndex = 0;
    $finalArea.classList.add('hidden');
    if(state.patientIndex >= patients.length){
      // انتهت اللعبة
      $story.classList.remove('hidden');
      $story.innerHTML = `<h2>خلصت اللعبة — شكرًا للمشاركة!</h2><p>لو عايزين نعيد لأي مريض تاني اضغط إعادة من الأول.</p><button id="restart2" class="btn">إعادة من الأول</button>`;
      document.getElementById('restart2').addEventListener('click', startGame);
    } else {
      $roundArea.classList.remove('hidden');
      renderCurrentRound();
    }
  });

  $restartGame.addEventListener('click', ()=>{
    startGame();
  });

  // تهيئة
  showIntro();

  return { patients, state };
})();
