const icons = {
    shield: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /> </svg>`,
    lock: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /> </svg>`,
    chart: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /> </svg>`,
    globe: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /> </svg>`,
    cpu: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" /> </svg>`
};

const projects = [
    //2026
    {
        title: "Análise de Viabilidade da Implantação de Algoritmos de Criptografia Pós-Quântica em Blockchains para IoT",
        date: "2026/07/19",
        authors: "Alison G. Schemitt, Roben C. Lunardi, Avelino F. Zorzo, Henrique F. da Silva, Diego Kreutz, Rodrigo B. Mansilha",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:jgBuDB5drN8C",
        icon: "lock"
    },
    {
        title: "A multimodal dataset for environmental occupancy detection",
        date: "2026/06/09",
        authors: "Guilherme D. Deconto, Avelino F. Zorzo, Roben C. Lunardi, Rafael C. Cardoso, Leonardo dos Santos Teixeira",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:ubry08Y2EpUC",
        icon: "globe"
    },
    {
        title: "ExperDF-CM: A Digital Forensics Controlled Experiments Conceptual Model",
        date: "2026/06/01",
        authors: "Edson OliveiraJr, Thiago J. Silva, Charles V. Neu, Avelino F. Zorzo, Ana H. Mazur",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:j7_hQOaDUrUC",
        icon: "chart"
    },
    {
        title: "Principles of Controlled Experimentation",
        date: "2026/06/01",
        authors: "Edson OliveiraJr, Thiago J. Silva, Charles V. Neu, Avelino F. Zorzo, Ana H. Mazur",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:7BrZ7Jt4UNcC",
        icon: "chart"
    },
    {
        title: "Example 1: The Memory That Would Not Lie",
        date: "2026/06/01",
        authors: "Edson OliveiraJr, Thiago J. Silva, Charles V. Neu, Avelino F. Zorzo, Ana H. Mazur",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:nRpfm8aw39MC",
        icon: "chart"
    },
    {
        title: "Example 5: The Invisible Signature: Blockchain Provenance",
        date: "2026/06/01",
        authors: "Edson OliveiraJr, Thiago J. Silva, Charles V. Neu, Avelino F. Zorzo, Ana H. Mazur",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:PaBasH6fAo0C",
        icon: "lock"
    },
    {
        title: "Digital Forensics in a Nutshell",
        date: "2026/06/01",
        authors: "Edson OliveiraJr, Thiago J. Silva, Charles V. Neu, Avelino F. Zorzo, Ana H. Mazur",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:MpfHP-DdYjUC",
        icon: "chart"
    },
    {
        title: "Example 3: The Case of the Altered Cloud Logs",
        date: "2026/06/01",
        authors: "Edson OliveiraJr, Thiago J. Silva, Charles V. Neu, Avelino F. Zorzo, Ana H. Mazur",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:7Hz3ACDFbsoC",
        icon: "chart"
    },
    {
        title: "The Role of Reproducibility in Science and Digital Forensics",
        date: "2026/06/01",
        authors: "Edson OliveiraJr, Thiago J. Silva, Charles V. Neu, Avelino F. Zorzo, Ana H. Mazur",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:LdasjJ6CEcoC",
        icon: "chart"
    },
    {
        title: "Example 4: Echoes in the IoT Lab",
        date: "2026/06/01",
        authors: "Edson OliveiraJr, Thiago J. Silva, Charles V. Neu, Avelino F. Zorzo, Ana H. Mazur",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:cK4Rrx0J3m0C",
        icon: "globe"
    },
    {
        title: "Basics of Conceptual Modeling",
        date: "2026/06/01",
        authors: "Edson OliveiraJr, Thiago J. Silva, Charles V. Neu, Avelino F. Zorzo, Ana H. Mazur",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:kVjdVfd2voEC",
        icon: "chart"
    },
    {
        title: "Basics of Ontology and SPARQL Queries",
        date: "2026/06/01",
        authors: "Edson OliveiraJr, Thiago J. Silva, Charles V. Neu, Avelino F. Zorzo, Ana H. Mazur",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:v1_lew4L6wgC",
        icon: "chart"
    },
    {
        title: "Example 2: Unlocking the Locked—Smartphone Bypass Experiments",
        date: "2026/06/01",
        authors: "Edson OliveiraJr, Thiago J. Silva, Charles V. Neu, Avelino F. Zorzo, Ana H. Mazur",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:U4n9YNQMCAIC",
        icon: "chart"
    },
    {
        title: "Concluding Remarks: Toward a Scientifically Grounded and Open Digital Forensics",
        date: "2026/06/01",
        authors: "Edson OliveiraJr, Thiago J. Silva, Charles V. Neu, Avelino F. Zorzo, Ana H. Mazur",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:BzfGm06jWhQC",
        icon: "chart"
    },
    {
        title: "The ExperDF-Onto Ontology",
        date: "2026/06/01",
        authors: "Edson OliveiraJr, Thiago J. Silva, Charles V. Neu, Avelino F. Zorzo, Ana H. Mazur",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:43bX7VzcjpAC",
        icon: "chart"
    },
    {
        title: "An InfoSec GRC Maturity Model Proposal for a Secure Information Systems Usage on Brazilian Small Organizations",
        date: "2026/05/25",
        authors: "Caio Steglich, Ildevana P. Rodrigues, Avelino F. Zorzo, Daniel D. Bertoglio",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:lgwcVrK6X84C",
        icon: "shield"
    },
    {
        title: "Federated Learning for IoT Forensics: Enabling Privacy-Preserving Machine Learning",
        date: "2026/03/31",
        authors: "Mateus G. Haas, Roben C. Lunardi, Avelino F. Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:FiytvqdAVhgC",
        icon: "cpu"
    },
    {
        title: "Review and agenda of Digital Forensics education and training",
        date: "2026/02/01",
        authors: "Edson OliveiraJr, Avelino F. Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:buQ7SEKw-1sC",
        icon: "chart"
    },
    //2025 
    {
        title: "Assessing the impact of post-quantum digital signature algorithms on blockchains",
        date: "2025/11/14",
        authors: "Alison G. Schemitt, Henrique F. da Silva, Roben C. Lunardi, Diego Kreutz, Rodrigo B. Mansilha, Avelino F. Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:F1b5ZUV5XREC",
        icon: "lock"
    },
    {
        title: "Exploring the Impact of Quantization on LLM Security Against Prompt Injection",
        date: "2025/11/12",
        authors: "Rafael A. Rodrigues, Luan F. Garcia, Avelino F. Zorzo, Ewerton de Oliveira, Thomas Paula",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:0CzhzZyukY4C",
        icon: "cpu"
    },
    {
        title: "Characterizing Cybersecurity Awareness Among Brazilian Computer Science Higher Education Students",
        date: "2025/07/20",
        authors: "Vinícius E. Ferreira, Edson OliveiraJr, Bruno B. Zarpelao, Avelino F. Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:Bg7qf7VwUHIC",
        icon: "shield"
    },
    {
        title: "A review study of digital forensics in IoT: Process models, phases, architectures, and ontologies",
        date: "2025/06/01",
        authors: "Thiago J. Silva, Edson OliveiraJr, Maximiano E. Pereira, Avelino F. Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:tH6gc1N1XXoC",
        icon: "chart"
    },
    {
        title: "Stordy: Efficient Data Retrieval and Storage for Appendable-Block Blockchains",
        date: "2025/03/15",
        authors: "Leonardo B. da Rosa, Roben C. Lunardi, Avelino F. Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:CaZNVDsoPx4C",
        icon: "lock"
    },
    {
        title: "An ontology for promoting controlled experimentation in digital forensics",
        date: "2025/03/01",
        authors: "Thiago J. Silva, Ana H. Mazur, Edson OliveiraJr, Avelino F. Zorzo, Monalessa P. Barcellos",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:lvd772isFD0C",
        icon: "chart"
    },
    //2024 
    {
        title: "A Modular Architecture and a Cost-Model to Estimate the Overhead of Implementing Confidentiality in Cloud Computing Environments",
        date: "2024/10/23",
        authors: "Mauro Storch, Vinícius Meyer, Avelino Zorzo, Cesar A. De Rose",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:5MTHONV0fEkC",
        icon: "cpu"
    },
    {
        title: "Computing everywhere, for everyone, at any level",
        date: "2024/07/31",
        authors: "Avelino F. Zorzo, Claudia L. Da Motta, Leila Ribeiro, Lisandro Z. Granville",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:ZzlSgRqYykMC",
        icon: "globe"
    },
    {
        title: "How ontologies have supported digital forensics: review and recommendations",
        date: "2024/07/01",
        authors: "Thiago J. Silva, Edson OliveiraJr, Avelino F. Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:u-coK7KVo8oC",
        icon: "chart"
    },
    {
        title: "Machine learning for forensic occupancy detection in iot environments",
        date: "2024/03/26",
        authors: "Guilherme D. Deconto, Avelino F. Zorzo, Daniel B. Dalalana, Edson OliveiraJr, Roben C. Lunardi",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:_OXeSy2IsFwC",
        icon: "cpu"
    },
    {
        title: "A proposal to increase data utility on Global Differential Privacy data based on data use predictions",
        date: "2024/01/12",
        authors: "Henry C. Nunes, Marlon P. da Silva, Charles V. Neu, Avelino F. Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:Ehil0879vHcC",
        icon: "lock"
    },
    {
        title: "Shadow Blade: A tool to interact with attack vectors",
        date: "2024/01/03",
        authors: "Ariel R. Ril, Daniel D. Bertoglio, Avelino F. Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:nZcligLrVowC",
        icon: "shield"
    },
    {
        title: "USA-DSL: A process for usability evaluation of domain-specific languages",
        date: "2024/01/01",
        authors: "Ildevana Poltronieri, Avelino F. Zorzo, Maicon Bernardino, Edson OliveiraJr",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:fbc8zXXH2BUC",
        icon: "globe"
    },
    {
        title: "Introduçao a Blockchain: Visao Geral e Conceitos Básicos",
        date: "2024",
        authors: "Roben C. Lunardi, Regio A. Michelin, Avelino F. Zorzo, Ewerton Andrade, Diego Kreutz",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:gVv57TyPmFsC",
        icon: "lock"
    },
    //2023 
    {
        title: "Data management in appendable-block blockchains: a case study for it life-cycle management",
        date: "2023/11/13",
        authors: "Rodrigo W. Silveira, Roben C. Lunardi, Avelino F. Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:Aul-kAQHnToC",
        icon: "lock"
    },
    {
        title: "Modelo Integrado para Forense Computacional em Cenários Envolvendo Aplicaçoes IoT",
        date: "2023/09/18",
        authors: "Guilherme Schneider, Avelino F. Zorzo, Roben C. Lunardi",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:8xutWZnSdmoC",
        icon: "globe"
    },
    {
        title: "Towards new challenges of modern Pentest",
        date: "2023/08/21",
        authors: "Daniel D. Bertoglio, Arthur Gil, Juan Acosta, Júlia Godoy, Roben C. Lunardi, Avelino F. Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:OP4eGU-M3BUC",
        icon: "shield"
    },
    {
        title: "When blockchain meets smart cities: Opportunities, security and future research",
        date: "2023/08/10",
        authors: "Roben C. Lunardi, Regio A. Michelin, Maher Alharby, Volkan Dedeoglu, Henry C. Nunes, Eduardo Arruda, Avelino F. Zorzo, Aad van Moorsel",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:GFxP56DSvIMC",
        icon: "lock"
    },
    {
        title: "Impact of Using a Privacy Model on Smart Buildings Data for CO2 Prediction",
        date: "2023/07/11",
        authors: "Caroline Morisset, Marlon P. da Silva, Henry C. Nunes, Lucas T. Thomas, Charles V. Neu, Avelino F. Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:LhH-TYMQEocC",
        icon: "lock"
    },
    {
        title: "Proposta de Gestao do Ciclo de Vida de Equipamentos de TI com Appendable-block Blockchain",
        date: "2023/05/22",
        authors: "Rodrigo W. Silveira, Roben C. Lunardi, Avelino F. Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:yMeIxYmEMEAC",
        icon: "lock"
    },
    {
        title: "Testing Tools",
        date: "2023/02/06",
        authors: "Elder M. Rodrigues, Avelino F. Zorzo, Luciano Marchezan",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:vDZJ-YLwNdEC",
        icon: "cpu"
    },
    //2022
    {
        title: "Understanding the Penetration Test Workflow: a security test with Tramonto in an e-Government application",
        date: "2022/12/09",
        authors: "Daniel D. Bertoglio, Luis G. Schüler, Avelino F. Zorzo, Roben C. Lunardi",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:fFSKOagxvKUC",
        icon: "shield"
    },
    {
        title: "PlugSPL: An Environment to Support SPL Life Cycle",
        date: "2022/09/28",
        authors: "Elder M. Rodrigues, Avelino F. Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:OR75R8vi5nAC",
        icon: "cpu"
    },
    {
        title: "Model-Based Testing of Software Product Lines",
        date: "2022/09/28",
        authors: "Kleber L. Petry, Edson OliveiraJr, Leandro T. Costa, Aline Zanin, Avelino F. Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:OcBU2YAGkTUC",
        icon: "cpu"
    },
    {
        title: "PLeTs: A Software Product Line for Testing Tools",
        date: "2022/09/28",
        authors: "Elder M. Rodrigues, Avelino F. Zorzo, Luciano Marchezan",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:ODE9OILHJdcC",
        icon: "cpu"
    },
    {
        title: "Consensus algorithms on appendable-block blockchains: Impact and security analysis",
        date: "2022/08",
        authors: "Roben C. Lunardi, Regio A. Michelin, Henry C. Nunes, Charles V. Neu, Avelino F. Zorzo, Salil S. Kanhere",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:kh2fBNsKQNwC",
        icon: "lock"
    },
    {
        title: "Weasels e a construção de conhecimento em Segurança Ofensiva",
        date: "2022/04/24",
        authors: "Daniel D. Bertoglio, Henry C. Nunes, Pedro C. Filippi, Avelino F. Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:XoXfffV-tXoC",
        icon: "shield"
    },
    {
        title: "Digital forensics experimentation: Analysis and recommendations",
        date: "2022",
        authors: "Edson OliveiraJr, Tiago J. Silva, Avelino F. Zorzo, Charles V. Neu",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:foquWX3nUaYC",
        icon: "chart"
    },
    //2021
    {
        title: "Towards improving experimentation in software engineering",
        date: "2021/09/27",
        authors: "Edson OliveiraJr, Viviane Furtado, Henrique Vignando, Carlos Luz, André Cordeiro, Igor Steinmacher, Avelino Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:i2xiXl-TujoC",
        icon: "chart"
    },
    {
        title: "Resource Sharing and Security Implications on Machine Learning Inference Accelerators",
        date: "2021/07/12",
        authors: "Plínio Silveira, Cesar A. De Rose, Avelino F. Zorzo, Miguel G. Xavier, Dejan Milojicic, Sai R. Chalamalasetti, Sergey Serebryakov",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:SpbeaW3--B0C",
        icon: "cpu"
    },
    {
        title: "Multi-level consensus algorithm for appendable-block blokchains in iot environments",
        date: "2021",
        authors: "Roben C. Lunardi",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:jL-93Qbq4QoC",
        icon: "lock"
    },
    {
        title: "Heuristic Evaluation Checklist for Domain-specific Languages",
        date: "2021",
        authors: "Ildevana P. Rodrigues, Avelino F. Zorzo, Maicon B. da Silveira, Bruno Medeiros, Marcia de Borba Campos",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:a3BOlSfXSfwC",
        icon: "globe"
    },
    {
        title: "Is usability evaluation of DSL still a trending topic?",
        date: "2021",
        authors: "Ildevana Poltronieri, Allan C. Pedroso, Avelino F. Zorzo, Maicon Bernardino, Marcia de Borba Campos",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:oNZyr7d5Mn4C",
        icon: "globe"
    },
    {
        title: "Appendable-block blockchains: Overview, applications, and challenges",
        date: "2021",
        authors: "Regio A. Michelin, Roben C. Lunardi, Henry C. Nunes, Volkan Dedeoglu, Charles V. Neu, Avelino F. Zorzo, Salil S. Kanhere",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:lmc2jWPfTJgC",
        icon: "lock"
    },
    {
        title: "SMartyTesting: A Model-Based Testing Approach for Deriving Software Product Line Test Sequences",
        date: "2021",
        authors: "Kleber L. Petry, Edson OliveiraJr, Leandro T. Costa, Aline Zanin, Avelino F. Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:tYavs44e6CUC",
        icon: "cpu"
    },
    //2020
    {
        title: "Towards a conceptual model for promoting digital forensics experiments",
        date: "2020/12/01",
        authors: "Edson OliveiraJr, Avelino F. Zorzo, Charles V. Neu",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:epqYDVWIO7EC",
        icon: "chart"
    },
    {
        title: "Context-based consensus for appendable-block blockchains",
        date: "2020/11/02",
        authors: "Roben C. Lunardi, Maher Alharby, Henry C. Nunes, Avelino F. Zorzo, Changyu Dong, Aad van Moorsel",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:Z5m8FVwuT1cC",
        icon: "lock"
    },
    {
        title: "Model-based testing of software product lines: Mapping study and research roadmap",
        date: "2020/09/01",
        authors: "Kleber L. Petry, Edson OliveiraJr, Avelino F. Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:t7zJ5fGR-2UC",
        icon: "cpu"
    },
    {
        title: "Robin: A Web Security Tool",
        date: "2020/07/13",
        authors: "Guilherme Girotto, Avelino F. Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:zLWjf1WUPmwC",
        icon: "shield"
    },
    {
        title: "Appendable-block blockchain evaluation over geographically-distributed IoT networks",
        date: "2020/05/26",
        authors: "Eduardo H. de Arruda, Roben C. Lunardi, Henry C. Nunes, Avelino F. Zorzo, Regio A. Michelin",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:ML0RJ9NH7IQC",
        icon: "lock"
    },
    {
        title: "Context-based smart contracts for appendable-block blockchains",
        date: "2020/05/02",
        authors: "Henry C. Nunes, Roben C. Lunardi, Avelino F. Zorzo, Regio A. Michelin, Salil S. Kanhere",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:p__nRnzSRKYC",
        icon: "lock"
    },
    {
        title: "Gerenciamento de incidentes em siem seguindo itil",
        date: "2020/03/07",
        authors: "Charles V. Neu, Evandro Trebien, Daniel D. Bertoglio, Roben C. Lunardi, Avelino F. Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:j8SEvjWlNXcC",
        icon: "shield"
    },
    {
        title: "A journey in applying blockchain for cyberphysical systems",
        date: "2020/01/07",
        authors: "Volkan Dedeoglu, Ali Dorri, Raja Jurdak, Regio A. Michelin, Roben C. Lunardi, Salil S. Kanhere, Avelino F. Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:ZfRJV9d4-WMC",
        icon: "lock"
    },
    {
        title: "Computação na Educação Básica: Fundamentos e Experiências",
        date: "2020",
        authors: "André Raabe, Avelino F. Zorzo, Paulo Blikstein",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:fEOibwPWpKIC",
        icon: "globe"
    },
    {
        title: "A evolução da formação do profissional em computação na pós-graduação",
        date: "2020",
        authors: "Philippe O. Navaux, Edson N. Cáceres, Avelino F. Zorzo, Altigran S. da Silva, Rodolfo J. Azevedo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:e_rmSamDkqQC",
        icon: "globe"
    },
    {
        title: "Feasibility Analysis of SMartyModeling for Modeling UML-based Software Product Lines.",
        date: "2020",
        authors: "Leandro F. da Silva, Edson OliveiraJr, Avelino F. Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:g3aElNc5_aQC",
        icon: "cpu"
    },
    {
        title: "Experimentation of digital multimedia forensics: State of the art and research gaps",
        date: "2020",
        authors: "Edson OliveiraJr, Avelino F. Zorzo, Charles V. Neu",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:AvfA0Oy_GE0C",
        icon: "chart"
    },
    {
        title: "Empirical Study on Product Configuration and Traceability in UML-based Product-Lines",
        date: "2020",
        authors: "Thais Nepomuceno, Edson OliveiraJr, Raqueline Penteado, Marco A. G. Silva, Avelino F. Zorzo",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:URolC5Kub84C",
        icon: "cpu"
    },
    {
        title: "Model-Based Testing in Agile Projects: An Approach Based on Domain-Specific Languages⋆",
        date: "2020",
        authors: "Aline Zanin, Avelino F. Zorzo, Henry C. Nunes",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:uWiczbcajpAC",
        icon: "cpu"
    },
    {
        title: "Modelo de negócio para saúde colaborativa usando smart contracts: caso TokenHealth",
        date: "2020",
        authors: "Vinicius Branco, Bruno Lippert, Roben C. Lunardi, Henry C. Nunes, Charles V. Neu, Avelino F. Zorzo, Diego Pirolla, Reider A. Bernucio, Sérgio Spacov",
        link: "https://scholar.google.com/citations?view_op=view_citation&hl=pt-BR&user=rsiQlMgAAAAJ&citation_for_view=rsiQlMgAAAAJ:9Nmd_mFXekcC",
        icon: "lock"
    },

];

const container = document.getElementById("info-container");

container.innerHTML = "";

let anoAnterior = "";
let htmlGerado = "";

projects.forEach((project, index) => {
    const anoAtual = project.date.substring(0, 4);
    const projectIcon = icons[project.icon] || icons.shield;

   
    if (anoAnterior !== anoAtual) {
       
        if (anoAnterior !== "") {
            htmlGerado += `</div></div>`; 
            htmlGerado += `<hr class="linha-ano" />`;
        }

        htmlGerado += `
            <div class="secao-ano">
                <div class="titulo-ano-container">
                    <h2 class="texto-ano">${anoAtual}</h2>
                </div>
                <div class="lista-projetos-ano">
        `;

        anoAnterior = anoAtual;
    }

    htmlGerado += `
    <a href="${project.link}" target="_blank" style="text-decoration: none;">
      <div class="project-container">
        <div class="project-image">
          <div class="container-image">
            ${projectIcon}
          </div>
        </div>
        <div class="project-infos">
          <div class="project-title">
            <h1>${project.title}</h1>
          </div>
          <div class="project-data">
            <p class="data-publicacao">${project.date.split('/').reverse().join('/')}</p>
            <p class="autores">${project.authors}</p>
          </div>
        </div>
      </div>
    </a>
  `;

    
    if (index === projects.length - 1) {
        htmlGerado += `</div></div>`;
    }
});


container.innerHTML = htmlGerado;