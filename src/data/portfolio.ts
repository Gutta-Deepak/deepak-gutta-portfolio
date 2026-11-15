/** Portfolio content for Deepak Gutta. Visual components and layout remain from the supplied template. */
export type Palette = { from: string; via: string; to: string; accent: string };
const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const profile = {
  fullName: 'Deepak Gutta', displayName: 'Deepak Gutta', firstName: 'DEEPAK GUTTA', seriesTag: 'DATA ENGINEERING PORTFOLIO', originalLabel: 'DEEPAK GUTTA • PROFESSIONAL PORTFOLIO',
  role: 'Programmer Analyst | Data Engineer', tagline: ['Snowflake Development', 'SQL & Data Warehousing', 'ETL / ELT • BI Reporting'],
  intro: 'Programmer Analyst – Data Engineer at Cognizant, contributing to the Solventum (formerly 3M Healthcare) enterprise data warehouse. Delivered 40+ development requirements across Snowflake development, SQL transformations, ETL/ELT workflows, reporting layers, data validation, reconciliation, UAT and deployment. Experienced with Snowflake, SQL, Python, Talend, dbt and BI reporting, with a focus on reliable, governed and analytics-ready data solutions.',
  location: 'Hyderabad, India', email: 'deepaknaidu0000@gmail.com',
  links: { linkedin: 'https://www.linkedin.com/in/deepak-gutta-3228b9253/', github: 'https://github.com/Gutta-Deepak' },
  resumePdf: '/assets/Deepak_Gutta_Resume.pdf',
  portrait: { src: '/assets/deepak-profile.jpg', srcSet: '/assets/deepak-profile.jpg', alt: 'Deepak Gutta portrait' },
  interests: ['Enterprise Data Engineering', 'Snowflake & Cloud Warehousing', 'Data Integration & BI Analytics'],
};

export const education = [{ school: 'Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology', place: 'Chennai, India', degree: 'Bachelor of Technology — Computer Science and Engineering', period: '2021 – 2025', score: 'CGPA 8.7 / 10' }];
export const experience = [
 { company: 'Cognizant Technology Solutions', role: 'Programmer Analyst — Data Engineer', place: 'Hyderabad, India', period: 'Jun 2025 – Present', points: [
  'Contributed to 40+ development requirements for the Solventum (formerly 3M Healthcare) enterprise data warehouse, delivering Snowflake and SQL development.',
  'Developed and maintained Snowflake data models and reporting layers for ADVC, ADVCTR, ACAT, RunChart and employee shift-monitoring use cases.',
  'Built and supported data ingestion and transformation workflows using Snowflake stages, file formats and COPY INTO; worked with Streams, Tasks, stored procedures, views and sequences.',
  'Executed data validation, source-to-target reconciliation and data quality checks; developed SQL transformations using joins, CTEs, subqueries and window functions.',
  'Applied role-based access control (RBAC), roles, privileges and secure views; supported code reviews, unit/system testing, UAT, deployment and production support within Agile delivery.'
 ]},
 { company: 'Cognizant Technology Solutions', role: 'Data Engineering Intern', place: 'Kochi, India', period: 'Dec 2024 – Mar 2025', points: [
  'Developed ETL workflows using Talend, SQL and Python to support data ingestion, cleansing and integration.',
  'Performed data validation and reconciliation, including duplicate identification, null handling and consistency checks.',
  'Worked with MySQL schemas and SQL transformations to prepare structured, reporting-ready datasets.'
 ]}
];
export type Metric = { value: string; label: string };
export type Project = { id:string; title:string; year:string; genre:string; logline:string; stack:string[]; build:string[]; features:string[]; metrics:Metric[]; github?:string; palette:Palette; motif:'shield'|'flow'|'tenants' };
export const projects: Project[] = [
 { id:'solventum-warehouse', title:'Solventum — Enterprise Snowflake Data Warehouse', year:'Jun 2025 – Present', genre:'Professional Engagement • Cognizant Technology Solutions', logline:'Client engagement delivered as a Programmer Analyst – Data Engineer at Cognizant for Solventum (formerly 3M Healthcare). This is professional experience, not a personal project.', stack:['Snowflake','SQL','dbt','Tableau','Power BI','ETL / ELT','RBAC'], build:['Contributed to 40+ development requirements spanning requirement analysis, Snowflake development, UAT and deployment.','Developed Snowflake data models and reporting layers for ADVC, ADVCTR, ACAT, RunChart and employee shift-monitoring modules.','Built ingestion and transformation workflows using stages, file formats and COPY INTO; automated incremental processing with Streams, Tasks, stored procedures and views.','Performed data validation, source-to-target reconciliation and complex SQL development using joins, CTEs, subqueries, window functions and aggregations.','Implemented role-based access control, roles, privileges and secure views; supported testing, code reviews, deployments and Agile delivery.'], features:['Enterprise healthcare data warehousing','ADVC, ADVCTR, ACAT and RunChart reporting layers','Snowflake ingestion using stages, file formats and COPY INTO','Streams, Tasks, stored procedures and views','SQL transformation, validation and reconciliation','RBAC, secure views, UAT and deployment'], metrics:[{value:'40+',label:'development requirements'},{value:'5',label:'reporting areas / modules'}], palette:{from:'#04121f',via:'#0f4c6e',to:'#05080d',accent:'#4cc9ff'}, motif:'flow' },
 { id:'amazon-sales', title:'Amazon Sales Analysis Dashboard', year:'Personal Project', genre:'Personal Project • Business Intelligence', logline:'Sales analysis dashboard focused on sales performance, revenue trends and product-level metrics.', stack:['SQL','Power BI','Data Visualization'], build:['Analyzed sales performance, revenue trends and product metrics using SQL and Power BI.','Presented business-facing insights through dashboard visuals and performance summaries.'], features:['Sales performance analysis','Revenue trend analysis','Product-level metrics','Power BI dashboard reporting'], metrics:[{value:'SQL',label:'data analysis'},{value:'Power BI',label:'dashboard'}], palette:amber, motif:'flow' },
 { id:'election-dashboard', title:'Indian General Election Analysis — 2024', year:'2024', genre:'Personal Project • Business Intelligence', logline:'Interactive Power BI dashboard analyzing the 2024 Indian General Election results.', stack:['Power BI','DAX','Data Visualization'], build:['Developed an interactive Power BI dashboard to analyze election results, party performance and constituency-level insights.'], features:['Election result analysis','Party performance comparison','Constituency insights','Interactive Power BI visuals'], metrics:[{value:'2024',label:'election year'},{value:'Power BI',label:'visualization'}], palette:violet, motif:'flow' },
 { id:'carconnect', title:'Used Car Sales and Rental Platform', year:'Personal Project', genre:'Personal Project • Web Application', logline:'A web application concept for used-car listings, rentals and user management.', stack:['HTML','CSS','JavaScript','Firebase'], build:['Developed a used-car selling and rental web application using HTML, CSS, JavaScript and Firebase.','Designed the project around vehicle listings, rental discovery and user-management workflows.'], features:['Used-car listings','Rental workflows','User management','Firebase integration'], metrics:[{value:'Web',label:'application'},{value:'Firebase',label:'backend'}], palette:ocean, motif:'tenants' },
 { id:'etl-integration', title:'Automated Data Integration and ETL', year:'Personal Project', genre:'Personal Project • Data Engineering', logline:'Data ingestion, transformation and validation workflows built with Python, SQL and Talend.', stack:['Python','SQL','Talend','ETL'], build:['Developed data ingestion and transformation workflows using Python, SQL and Talend.','Applied validation checks to improve consistency and prepare structured datasets for downstream use.'], features:['Data ingestion','Data transformation','Data validation','Talend and SQL workflows'], metrics:[{value:'Python',label:'scripting'},{value:'Talend',label:'ETL integration'}], palette:jade, motif:'flow' }
];
export type Achievement = { id:string; title:string; org:string; detail:string; laurel:string; link?:string };
export const achievements: Achievement[] = [
 {id:'snowpro',title:'SnowPro Core',org:'Snowflake',detail:'Snowflake platform and data warehouse certification.',laurel:'Certification'},
 {id:'databricks',title:'Databricks Certified Data Engineer Associate',org:'Databricks',detail:'Data engineering certification covering Databricks fundamentals.',laurel:'Certification'},
 {id:'aws',title:'AWS Academy Cloud Foundations',org:'Amazon Web Services',detail:'Cloud foundations credential.',laurel:'Certification'},
 {id:'claude',title:'Claude Certified Developer Foundations',org:'Anthropic',detail:'Developer foundations certification for working with Claude.',laurel:'Certification'},
 {id:'experience',title:'40+ Development Requirements',org:'Cognizant • Solventum',detail:'Contributed to enterprise Snowflake development and reporting requirements.',laurel:'Professional Experience'}
];
export type Certification = { issuer:string; name:string; link?:string };
export const certifications: Certification[] = [
 {issuer:'Snowflake',name:'SnowPro Core',link:'https://www.snowflake.com/certifications/'},
 {issuer:'Databricks',name:'Databricks Certified Data Engineer Associate',link:'https://www.databricks.com/learn/certification/data-engineer-associate'},
 {issuer:'AWS',name:'AWS Academy Cloud Foundations',link:'https://www.credly.com/organizations/aws-academy/badges'},
 {issuer:'Anthropic',name:'Claude Certified Developer Foundations'},
 {issuer:'Simplilearn',name:'Machine Learning using Python',link:'https://www.simplilearn.com/'}
];
export type Skill = {name:string;mono:string;note?:string};
export type SkillCategory = {id:string;title:string;subtitle:string;skills:Skill[]};
export const skillCategories: SkillCategory[] = [
 {id:'data-platforms',title:'Data Platforms',subtitle:'Cloud warehouse & lakehouse',skills:[{name:'Snowflake',mono:'Sf',note:'Core'},{name:'Databricks',mono:'Db'},{name:'Azure',mono:'Az'},{name:'DBT',mono:'Db'}]},
 {id:'languages',title:'Languages',subtitle:'Querying & programming',skills:[{name:'SQL',mono:'Sq',note:'Core'},{name:'Python',mono:'Py'},{name:'PySpark',mono:'Ps'}]},
 {id:'engineering',title:'Data Engineering',subtitle:'Pipelines & integration',skills:[{name:'ETL / ELT',mono:'Et'},{name:'Talend',mono:'Tl'},{name:'Data Modeling',mono:'Dm'},{name:'Data Quality',mono:'Dq'},{name:'Stored Procedures',mono:'Sp'},{name:'Streams & Tasks',mono:'St'}]},
 {id:'bi',title:'BI & Analytics',subtitle:'Reporting & insights',skills:[{name:'Power BI',mono:'Pb'},{name:'Tableau',mono:'Tb'},{name:'DAX',mono:'Dx'},{name:'Power Query',mono:'Pq'}]},
 {id:'database',title:'Databases & Tools',subtitle:'Development workflow',skills:[{name:'MySQL',mono:'My'},{name:'Git / GitHub',mono:'Gt'},{name:'RBAC',mono:'Rb'},{name:'COPY INTO',mono:'Cp'}]}
];
export const skillEvidence: Record<string,string[]> = {
 Snowflake:['Enterprise Snowflake Data Warehouse','SnowPro Core'],SQL:['Solventum data warehouse','Talend ETL workflows'],Python:['Python Practice Projects','Talend ETL workflows'],PySpark:['Data engineering skill set'],DBT:['Data engineering skill set'],Azure:['Cloud platform skill set'],Databricks:['Databricks Certified Data Engineer Associate'],Talend:['Cognizant Data Engineering Internship'], 'Power BI':['Indian General Election Result Analysis — 2024'],Tableau:['BI reporting skill set'],DAX:['Power BI dashboard project'],MySQL:['Cognizant Data Engineering Internship'],'Git / GitHub':['Public project repositories']
};
export type Episode = {code:string;title:string;description:string;tags:string[];runtime:string;palette:Palette};
export type Season = {number:number;title:string;period:string;synopsis:string;episodes:Episode[]};
export const seasons: Season[] = [
 {number:1,title:'The Foundations',period:'2021 – 2025',synopsis:'Computer Science education and the foundations of data and software engineering.',episodes:[{code:'S01 E01',title:'Computer Science',description:'B.Tech in Computer Science and Engineering at Vel Tech.',tags:['B.Tech','CSE','CGPA 8.7'],runtime:'2021 – 2025',palette:violet}]},
 {number:2,title:'Entering Data Engineering',period:'Dec 2024 – Mar 2025',synopsis:'Data Engineering internship at Cognizant, Kochi.',episodes:[{code:'S02 E01',title:'ETL Foundations',description:'Built Talend, SQL and Python workflows for ingestion, cleansing and integration.',tags:['Talend','SQL','Python'],runtime:'Dec 2024 – Mar 2025',palette:amber},{code:'S02 E02',title:'Data Quality',description:'Validation, reconciliation, duplicate handling and null checks.',tags:['Validation','Reconciliation'],runtime:'Internship',palette:jade}]},
 {number:3,title:'Enterprise Data Platforms',period:'Jun 2025 – Present',synopsis:'Working as Programmer Analyst — Data Engineer at Cognizant on the Solventum engagement.',episodes:[{code:'S03 E01',title:'Snowflake Development',description:'Contributed to 40+ requirements for enterprise Snowflake warehouse and reporting layers.',tags:['Snowflake','SQL','40+ requirements'],runtime:'Jun 2025 – Present',palette:ocean},{code:'S03 E02',title:'Pipeline Engineering',description:'Stages, file formats, COPY INTO, Streams, Tasks and stored procedures.',tags:['ETL / ELT','Streams','Tasks'],runtime:'Cognizant • Solventum',palette:violet},{code:'S03 E03',title:'Quality & Governance',description:'Validation, reconciliation, RBAC, secure views, testing and deployment.',tags:['Data Quality','RBAC','UAT'],runtime:'Cognizant • Solventum',palette:jade}]},
 {number:4,title:'Independent Projects',period:'2024 – Present',synopsis:'Personal projects focused on business intelligence, web applications and data integration, separate from the Cognizant–Solventum engagement.',episodes:[{code:'S04 E01',title:'Amazon Sales Analysis',description:'Analyzed sales performance, revenue trends and product metrics using SQL and Power BI.',tags:['SQL','Power BI'],runtime:'Personal Project',palette:amber},{code:'S04 E02',title:'Indian General Election Analysis',description:'Interactive Power BI dashboard covering election results, party performance and constituency insights.',tags:['Power BI','DAX'],runtime:'2024',palette:violet},{code:'S04 E03',title:'Used Car Sales & Rental Platform',description:'Web application developed using HTML, CSS, JavaScript and Firebase.',tags:['JavaScript','Firebase'],runtime:'Personal Project',palette:crimson},{code:'S04 E04',title:'Automated Data Integration & ETL',description:'Data ingestion, transformation and validation workflows using Python, SQL and Talend.',tags:['Python','SQL','Talend'],runtime:'Personal Project',palette:jade}]}
];
export type TopPick = {label:string;title:string;detail:string;palette:Palette};
export const topPicks: TopPick[] = [
 {label:'Core platform',title:'Snowflake',detail:'Enterprise data warehouse development',palette:ocean},
 {label:'Professional experience',title:'Cognizant',detail:'Solventum • 40+ development requirements',palette:crimson},
 {label:'Data integration',title:'Talend + SQL + Python',detail:'ETL workflows and data quality',palette:amber},
 {label:'BI project',title:'Election Analysis 2024',detail:'Power BI dashboard',palette:violet},
 {label:'Personal project',title:'Amazon Sales Analysis',detail:'SQL and Power BI dashboard',palette:jade},
 {label:'Certification',title:'SnowPro Core',detail:'Snowflake certification',palette:amber},
 {label:'Analytics',title:'Power BI & Tableau',detail:'Reporting and visualization',palette:ocean},
 {label:'Engineering',title:'Streams & Tasks',detail:'Snowflake pipeline automation',palette:crimson},
 {label:'Programming',title:'Python',detail:'ETL and project development',palette:jade},
 {label:'Current focus',title:'Data Engineering',detail:'Cloud data platforms and analytics',palette:violet}
];
export type IntroSlide = {kicker:string;title:string;lines:string[];chips?:string[]};
export const introSlides: IntroSlide[] = [
 {kicker:'Professional Experience',title:'Data Engineer',lines:['Cognizant Technology Solutions • Hyderabad','Programmer Analyst — Data Engineer • Jun 2025 – Present'],chips:['Snowflake','SQL','ETL / ELT']},
 {kicker:'Enterprise Project',title:'Solventum',lines:['40+ development requirements','Snowflake reporting layers • SQL development • UAT & deployment'],chips:['ADVC','ADVCTR','ACAT','RunChart']},
 {kicker:'Internship',title:'Data Engineering',lines:['Cognizant • Kochi • Dec 2024 – Mar 2025','Talend, SQL and Python ETL workflows'],chips:['Talend','Python','MySQL']},
 {kicker:'Personal Projects',title:'Independent Work',lines:['Amazon Sales Analysis — SQL and Power BI','Indian General Election Analysis 2024 — Power BI','Used Car Sales & Rental Platform — HTML, CSS, JavaScript and Firebase','Automated Data Integration & ETL — Python, SQL and Talend']},
 {kicker:'Certifications',title:'Data & Developer Credentials',lines:['SnowPro Core • Databricks Data Engineer Associate','AWS Academy Cloud Foundations • Claude Certified Developer Foundations'],chips:['Snowflake','Databricks','AWS','Anthropic']},
 {kicker:'Current mission',title:'Build reliable data products',lines:['Snowflake • SQL • Python • PySpark • DBT','Power BI • Tableau • Azure • Databricks']}
];
export type ProfileId = 'sushmita'|'recruiter'|'developer'|'creative';
export type SectionId = 'about'|'journey'|'originals'|'picks'|'skills'|'moments'|'story';
export const viewerProfiles: {id:ProfileId;name:string;blurb:string;color:string;order:SectionId[]}[] = [
 {id:'sushmita',name:'Deepak Gutta',blurb:'The full series, in order',color:'#e5132b',order:['about','journey','originals','picks','skills','moments','story']},
 {id:'recruiter',name:'Recruiter',blurb:'Experience, resume & skills first',color:'#4cc9ff',order:['story','moments','skills','originals','about','journey','picks']},
 {id:'developer',name:'Data Engineer',blurb:'Projects, stack & GitHub first',color:'#46e3a8',order:['originals','skills','journey','moments','about','picks','story']},
 {id:'creative',name:'Analytics',blurb:'Journey & project highlights',color:'#ffb547',order:['journey','picks','originals','moments','about','skills','story']}
];
export const sectionMeta: Record<SectionId,{nav:string;card:string;meta:string;palette:Palette}> = {
 about:{nav:'About',card:'About Me',meta:'The Pilot • Professional Profile',palette:violet},
 journey:{nav:'Journey',card:'My Journey',meta:`${seasons.length} Seasons • ${seasons.reduce((n,s)=>n+s.episodes.length,0)} Episodes`,palette:amber},
 originals:{nav:'Projects',card:'My Projects',meta:`${projects.length - 1} Personal Projects • Solventum Engagement`,palette:crimson},
 picks:{nav:'Highlights',card:'Top Highlights',meta:'Career & technical highlights',palette:jade},
 skills:{nav:'Skills',card:'Technical Skills',meta:`${skillCategories.length} Categories`,palette:ocean},
 moments:{nav:'Certifications',card:'Certifications & Achievements',meta:`${achievements.length} Highlights • ${certifications.length} Certifications`,palette:crimson},
 story:{nav:'Resume',card:'The Full Story',meta:'Resume • View & download',palette:violet}
};
