export interface Translation {
    navbar: {
        home: string;
        project: string;
        demo: string;
        team: string;
        vision: string;
        contact: string;
    };
    hero: {
        title: string;
        subtitle: string;
        ctaPrimary: string;
        ctaSecondary: string;
    };
    project: {
        heading: string;
        description: string;
        cards: {
            ai: {
                title: string;
                description: string;
            };
            realtime: {
                title: string;
                description: string;
            };
            scalable: {
                title: string;
                description: string;
            };
        };
    };
    demo: {
        heading: string;
        description: string;
        ctaButton: string;
    };
    testimonials: {
        heading: string;
        subtitle: string;
        feedback: {
            quote: string;
            role: string;
        }[];
    };
    screenshots: {
        heading: string;
    };
    team: {
        heading: string;
    };
    vision: {
        heading: string;
        steps: {
            step1: {
                title: string;
                description: string;
            };
            step2: {
                title: string;
                description: string;
            };
            step3: {
                title: string;
                description: string;
            };
        };
    };
    contact: {
        heading: string;
        invitation: string;
        email: string;
    };
    footer: {
        copyright: string;
    };
}

export const translations: Record<'tr' | 'en', Translation> = {
    tr: {
        navbar: {
            home: 'Ana Sayfa',
            project: 'Proje',
            demo: 'Demo',
            team: 'Ekip',
            vision: 'Vizyon',
            contact: 'İletişim',
        },
        hero: {
            title: 'Turk3cell — Yapay Zekâ ile Dijital Geleceği Şekillendiriyoruz',
            subtitle: 'Gerçek dünya problemlerini çözmek için yapay zekâ, veri bilimi ve ölçeklenebilir yazılım mimarilerini bir araya getiriyoruz.',
            ctaPrimary: 'Projeyi Keşfet',
            ctaSecondary: 'Demo İzle',
        },
        project: {
            heading: 'Proje Hakkında',
            description: 'Turk3cell, çok kaynaklı veri toplama, gerçek zamanlı analiz ve yapay zekâ tabanlı karar destek mekanizmalarını tek bir ölçeklenebilir platformda birleştiren gelişmiş bir akıllı analiz sistemidir. Sistem; resmi veri kaynakları, doküman analiz hatları, haber akışları ve kurumsal veri kaynaklarını agent tabanlı mimari ile işleyerek otomatik risk değerlendirme, erken uyarı ve dinamik raporlama yetenekleri sunar. Asenkron veri işleme, modüler analiz pipeline\'ları ve LLM destekli yorumlama katmanı sayesinde yüksek doğrulukta, sürekli güncellenen ve gerçek dünya koşullarına uyum sağlayabilen karar destek çıktıları üretir.',
            cards: {
                ai: {
                    title: 'Yapay Zekâ Analiz Motoru',
                    description: 'Çok modüllü veri işleme hatları ve LLM destekli yorumlama katmanı ile karmaşık veri kümelerinden otomatik risk ve içgörü üretimi.',
                },
                realtime: {
                    title: 'Gerçek Zamanlı Veri İşleme',
                    description: 'Asenkron veri toplama, streaming analiz ve olay tabanlı mimari ile anlık risk tespiti ve erken uyarı üretimi.',
                },
                scalable: {
                    title: 'Ölçeklenebilir Akıllı Platform',
                    description: 'Modüler agent mimarisi sayesinde yeni veri kaynakları ve analiz modüllerinin sisteme hızlı entegrasyonu.',
                },
            },
        },
        demo: {
            heading: 'Demo & Uygulama',
            description: 'Demoda, sistemimizin gerçek zamanlı veri işleme ve akıllı analiz akışını canlı olarak inceleyebilirsiniz.',
            ctaButton: 'Demo Aç',
        },
        testimonials: {
            heading: 'Kullanıcı Yorumları',
            subtitle: 'Geri bildirimler anonimleştirilmiş ve kişisel verilerden arındırılmıştır.',
            feedback: [
                {
                    quote: 'Canlı terminal ve adım adım ilerleyen yol haritası sayesinde sistemin ne yaptığını anlık takip edebildim. Şeffaflık ciddi güven veriyor.',
                    role: 'Operasyon Uzmanı (Anonim)',
                },
                {
                    quote: 'Sohbet ederken aynı anda PDF&#39;i sağ panelde doğrulayabilmek büyük fark yaratıyor. &#39;Kaynağa dayalı&#39; çalışma hissi çok güçlü.',
                    role: 'Analist (Anonim)',
                },
                {
                    quote: 'Yanıtların hızlı gelmesi ve raporda olmayan bilgiye &#39;yok&#39; demesi, sahada kullanım için kritik. Uydurma üretmiyor.',
                    role: 'Uyum & Risk (Anonim)',
                },
                {
                    quote: 'Uzun süren analizlerde bile ekranın donmaması ve süreç akışının canlı görünmesi kullanıcı deneyimini belirgin şekilde iyileştiriyor.',
                    role: 'Yönetici (Anonim)',
                },
            ],
        },
        screenshots: {
            heading: 'Demo İçi Görüntüler',
        },
        team: {
            heading: 'Ekibimiz',
        },
        vision: {
            heading: 'Vizyonumuz',
            steps: {
                step1: {
                    title: 'Sürekli Akıllı İzleme ve Erken Uyarı Sistemleri',
                    description: 'Geliştirilen Watchtower mimarisi ile şirket risklerini 7/24 asenkron olarak izleyen, otomatik erken uyarı üreten ve değişen veri akışlarına anlık adapte olabilen otonom analiz sistemleri oluşturmayı hedefliyoruz.',
                },
                step2: {
                    title: 'Etkileşimli RAG Tabanlı Karar Destek Platformu',
                    description: 'Statik raporlama anlayışının ötesine geçerek, Retrieval-Augmented Generation (RAG) mimarisi ile raporları sorgulanabilir, bağlam farkında ve kullanıcı etkileşimine açık yaşayan bilgi platformlarına dönüştürmeyi hedefliyoruz.',
                },
                step3: {
                    title: 'Multimodal Analiz ve Ölçeklenebilir Yapay Zekâ Ekosistemi',
                    description: 'Gelecek fazlarda metin, grafik ve görsel verileri birlikte analiz edebilen multimodal yapay zekâ modelleri ile güvenli, ölçeklenebilir ve kurumsal düzeyde kullanılabilir analiz platformları geliştirmeyi hedefliyoruz.',
                },
            },
        },
        contact: {
            heading: 'İletişim',
            invitation: 'İş birliği ve iletişim için bize ulaşın.',
            email: 'turk3cell@gmail.com',
        },
        footer: {
            copyright: '© 2026 Turk3cell. Tüm hakları saklıdır.',
        },
    },
    en: {
        navbar: {
            home: 'Home',
            project: 'Project',
            demo: 'Demo',
            team: 'Team',
            vision: 'Vision',
            contact: 'Contact',
        },
        hero: {
            title: 'Turk3cell — Shaping the Digital Future with Artificial Intelligence',
            subtitle: 'We combine AI, data science, and scalable software architectures to solve real-world challenges.',
            ctaPrimary: 'Explore Project',
            ctaSecondary: 'Watch Demo',
        },
        project: {
            heading: 'About the Project',
            description: 'Turk3cell is an advanced intelligent analytics platform that integrates multi-source data ingestion, real-time processing, and AI-driven decision support mechanisms into a scalable architecture. The system processes official data streams, document analysis pipelines, news intelligence sources, and enterprise datasets through an agent-based orchestration layer to deliver automated risk assessment, early-warning insights, and dynamic reporting capabilities. Leveraging asynchronous processing, modular analysis pipelines, and LLM-powered interpretation layers, the platform produces continuously updated, high-accuracy decision intelligence adaptable to real-world operational environments.',
            cards: {
                ai: {
                    title: 'AI Analysis Engine',
                    description: 'Automated risk and insight generation from complex multi-source datasets using modular pipelines and LLM-driven reasoning layers.',
                },
                realtime: {
                    title: 'Real-Time Intelligence Processing',
                    description: 'Event-driven architecture with asynchronous ingestion and streaming analytics enabling instant risk detection and early-warning insights.',
                },
                scalable: {
                    title: 'Scalable Intelligent Platform',
                    description: 'Modular agent architecture allowing rapid integration of new intelligence sources and analytical modules.',
                },
            },
        },
        demo: {
            heading: 'Demo & Application',
            description: 'In the demo, explore our real-time data processing and intelligent analytics flow.',
            ctaButton: 'Open Demo',
        },
        testimonials: {
            heading: 'User Feedback',
            subtitle: 'Feedback is anonymized and contains no personal data.',
            feedback: [
                {
                    quote: 'The live terminal and step-by-step roadmap let me track what the system is doing in real time. The transparency builds real trust.',
                    role: 'Operations Specialist (Anonymous)',
                },
                {
                    quote: 'Being able to verify the PDF on the side while chatting makes a huge difference. It feels strongly evidence-grounded.',
                    role: 'Analyst (Anonymous)',
                },
                {
                    quote: 'Fast responses and clearly saying &#39;not in the report&#39; is critical in practice. It doesn&#39;t fabricate.',
                    role: 'Compliance & Risk (Anonymous)',
                },
                {
                    quote: 'Even for long analyses, the UI doesn&#39;t freeze and the live process flow noticeably improves the experience.',
                    role: 'Manager (Anonymous)',
                },
            ],
        },
        screenshots: {
            heading: 'In-Demo Screenshots',
        },
        team: {
            heading: 'Our Team',
        },
        vision: {
            heading: 'Our Vision',
            steps: {
                step1: {
                    title: 'Continuous Intelligent Monitoring & Early Warning Systems',
                    description: 'Through the Watchtower architecture, we aim to build autonomous intelligence systems that continuously monitor organizational risks, generate automated early-warning signals, and adapt instantly to evolving real-world data streams.',
                },
                step2: {
                    title: 'Interactive RAG-Powered Decision Intelligence Platform',
                    description: 'Moving beyond static reporting, we aim to transform analytical outputs into interactive, context-aware knowledge systems using Retrieval-Augmented Generation (RAG) architectures.',
                },
                step3: {
                    title: 'Multimodal Intelligence & Scalable AI Ecosystem',
                    description: 'In upcoming phases, we plan to expand toward multimodal AI systems capable of jointly analyzing textual, graphical, and visual data, enabling secure and scalable enterprise-grade intelligence platforms.',
                },
            },
        },
        contact: {
            heading: 'Contact',
            invitation: 'Reach out for collaboration and inquiries.',
            email: 'turk3cell@gmail.com',
        },
        footer: {
            copyright: '© 2026 Turk3cell. All rights reserved.',
        },
    },
};

// Team data structure for loading from public folder
export interface TeamMember {
    name: string;
    role_tr: string;
    role_en: string;
    bio_tr: string;
    bio_en: string;
    linkedin_url: string;
    github_url: string;
    photo: string;
}

// Static team data parsed from info.txt files
export const teamData: TeamMember[] = [
    {
        name: 'Murat Dinç',
        role_tr: 'Yapay Zekâ Mühendisi',
        role_en: 'AI Engineer',
        bio_tr: 'Hacettepe Üniversitesi Yapay Zeka Mühendisliği 3. sınıf öğrencisi olarak Teknofest İHA takımında Yapay Zeka Kaptanı görevini yürütüyor; özellikle gömülü sistemler üzerinde çalışan, gerçek zamanlı ve matematiksel hesaplama yoğun yapay zeka modellerinin geliştirilmesine odaklanıyorum. Otonom sistemler, bilgisayarlı görü ve agent tabanlı yapay zeka yaklaşımlarını birleştirerek yarışma ve Ar-Ge projelerinde uçtan uca çözümler üretmeyi hedefliyorum.',
        bio_en: 'As a third-year undergraduate student in Artificial Intelligence Engineering at Hacettepe University, I serve as the AI Captain for the Teknofest UAV team. I focus on developing real-time and computationally intensive AI models, particularly for embedded systems. My goal is to create end-to-end solutions in competitions and R&D projects by integrating autonomous systems, computer vision, and agent-based AI approaches.',
        github_url: 'https://github.com/muratdincai',
        linkedin_url: 'https://www.linkedin.com/in/murat-dinç',
        photo: '/murat/avatar.jpeg',
    },
    {
        name: 'Miray İnci Başaran',
        role_tr: 'İstatistik Mühendisi',
        role_en: 'Statistics Engineer',
        bio_tr: 'Hacettepe Üniversitesi İstatistik Bölümü 3. sınıf öğrencisiyim. Hacettepe İststistik ve Veri Bilimi Topluluğu (HÜİST) Yönetim Kurulu Başkanı ve Türkiye Girişimcilik Vakfı (GİRVAK) Fellow\'u olarak liderlik ve topluluk geliştirme çalışmalarında aktif rol alıyorum. Veriyi yalnızca analiz edilen bir çıktı değil, doğru kullanıldığında dönüşüm yaratan güçlü bir araç olarak görüyorum. Uzun vadede veri temelli karar alma süreçlerini daha erişilebilir, güvenilir ve etkili hâle getiren sistemler geliştirmeyi amaçlıyorum.',
        bio_en: 'I am a third-year undergraduate student in the Department of Statistics at Hacettepe University. As the Chairperson of the Hacettepe Statistics and Data Science Community (HÜİST) and a Fellow of the Turkish Foundation for Entrepreneurship (GİRVAK), I take an active role in leadership and community development initiatives. I view data not merely as an output to be analyzed, but as a powerful tool that creates transformation when used correctly. In the long term, I aim to develop systems that make data-driven decision-making processes more accessible, reliable, and effective.',
        github_url: 'https://github.com/mirayinc',
        linkedin_url: 'https://www.linkedin.com/in/mirayincibasaran/',
        photo: '/miray/avatar.jpeg',
    },
    {
        name: 'Muhammed Ekinci',
        role_tr: 'Yapay Zeka Mühendisi',
        role_en: 'AI Engineer',
        bio_tr: 'Hacettepe Üniversitesi  Yapay Zeka Mühendisliği 3.sınıf öğrencisiyim. Hacettepe Teknofest topluluğu yönetim kurulu üyesiyim. Şu an Üniversitemize yapay zeka chatbot geliştiriyoruz ve bunun başında yer alıyorum.Agent kavramını öğrenen ve onunla oyun oynayan bir gencim',
        bio_en: 'I am a third-year undergraduate student in the Department of Artificial Intelligence Engineering at Hacettepe  University. I am a board member of the Hacettepe Teknofest community. Currently, we are developing an artificial intelligence chatbot for our university, and I am leading this project. I am a young person who is learning the concept of Agent and playing games with it.',
        github_url: 'https://github.com/ekinciimuhammed',
        linkedin_url: 'https://www.linkedin.com/in/muhammedekinci/',
        photo: '/muhammed/avatar.jpeg',
    },
];
