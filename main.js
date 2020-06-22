var issues = {
    issue1 : {title: '1. Poverty', info: `  More than 700 million people, or 10% of the world population, still live in extreme poverty and are struggling to fulfill the most basic needs like health, education, and access to water and sanitation, to name a few. The majority of people living on less than $1.90 a day live in sub-Saharan Africa. Worldwide, the poverty rate in rural areas is 17.2 per cent—more than three times higher than in urban areas.

    Having a job does not guarantee a decent living. In fact, 8 per cent of employed workers and their families worldwide lived in extreme poverty in 2018. Poverty affects children disproportionately. One out of five children live in extreme poverty. Ensuring social protection for all children and other vulnerable groups is critical to reduce poverty.
    
    Poverty has many dimensions, but its causes include unemployment, social exclusion, and high vulnerability of certain populations to disasters, diseases and other phenomena which prevent them from being productive. Growing inequality is detrimental to economic growth and undermines social cohesion, increasing political and social tensions and, in some circumstances, driving instability and conflicts.`},

    issue2 : {title: '2. Hunger', info: `   It is time to rethink how we grow, share and consume our food. If done right, agriculture, forestry and fisheries can provide nutritious food for all and generate decent incomes, while supporting people-centered rural development and protecting the environment.
                            
    Right now, our soils, freshwater, oceans, forests and biodiversity are being rapidly degraded. Climate change is putting even more pressure on the resources we depend on, increasing risks associated with disasters, such as droughts and floods. Many rural women and men can no longer make ends meet on their land, forcing them to migrate to cities in search of opportunities. Poor food security is also causing millions of children to be stunted, or too short for the ages, due to severe malnutrition.
    
    A profound change of the global food and agriculture system is needed if we are to nourish the 821 million people who are hungry today and the additional 2 billion people expected to be undernourished by 2050. Investments in agriculture are crucial to increasing the capacity for agricultural productivity and sustainable food production systems are necessary to help alleviate the perils of hunger.`},

    issue3 : {title: '3. Health', info: `   Ensuring healthy lives and promoting the well-being at all ages is essential to sustainable development.
                            
    Significant strides have been made in increasing life expectancy and reducing some of the common killers associated with child and maternal mortality, but working towards achieving the target of less than 70 maternal deaths per 100,000 live births by 2030 would require improvements in skilled delivery care.
    
    Achieving the target of reducing premature deaths due to incommunicable diseases by 1/3 by the year 2030 would also require more efficient technologies for clean fuel use during cooking and education on the risks of tobacco.
    
    Many more efforts are needed to fully eradicate a wide range of diseases and address many different persistent and emerging health issues. By focusing on providing more efficient funding of health systems, improved sanitation and hygiene, increased access to physicians and more tips on ways to reduce ambient pollution, significant progress can be made in helping to save the lives of millions.`},

    issue4 : {title: '4. Education', info: `    Obtaining a quality education is the foundation to creating sustainable development. In addition to improving quality of life, access to inclusive education can help equip locals with the tools required to develop innovative solutions to the world’s greatest problems.
                            
    Over 265 million children are currently out of school and 22% of them are of primary school age. Additionally, even the children who are attending schools are lacking basic skills in reading and math. In the past decade, major progress has been made towards increasing access to education at all levels and increasing enrollment rates in schools particularly for women and girls. Basic literacy skills have improved tremendously, yet bolder efforts are needed to make even greater strides for achieving universal education goals. For example, the world has achieved equality in primary education between girls and boys, but few countries have achieved that target at all levels of education.
    
    The reasons for lack of quality education are due to lack of adequately trained teachers, poor conditions of schools and equity issues related to opportunities provided to rural children. For quality education to be provided to the children of impoverished families, investment is needed in educational scholarships, teacher training workshops, school building and improvement of water and electricity access to schools.`},

    issue5 : {title: '5. Water', info: `    Clean, accessible water for all is an essential part of the world we want to live in and there is sufficient fresh water on the planet to achieve this. However, due to bad economics or poor infrastructure, millions of people including children die every year from diseases associated with inadequate water supply, sanitation and hygiene.

    Water scarcity, poor water quality and inadequate sanitation negatively impact food security, livelihood choices and educational opportunities for poor families across the world. At the current time, more than 2 billion people are living with the risk of reduced access to freshwater resources and by 2050, at least one in four people is likely to live in a country affected by chronic or recurring shortages of fresh water. Drought in specific afflicts some of the world’s poorest countries, worsening hunger and malnutrition. Fortunately, there has been great progress made in the past decade regarding drinking sources and sanitation, whereby over 90% of the world’s population now has access to improved sources of drinking water.
    
    To improve sanitation and access to drinking water, there needs to be increased investment in management of freshwater ecosystems and sanitation facilities on a local level in several developing countries within Sub-Saharan Africa, Central Asia, Southern Asia, Eastern Asia and South-Eastern Asia.`}
};

var issueTitle1 = document.getElementById('first-issue');
var issueTitle2 = document.getElementById('second-issue');
var issueTitle3 = document.getElementById('third-issue');
var issueTitle4 = document.getElementById('fourth-issue');
var issueTitle5 = document.getElementById('fifth-issue');

issueTitle1.textContent = issues.issue1.title;
issueTitle2.textContent = issues.issue2.title;
issueTitle3.textContent = issues.issue3.title;
issueTitle4.textContent = issues.issue4.title;
issueTitle5.textContent = issues.issue5.title;

var issueInfo1 = document.getElementById('first-issue-info');
var issueInfo2 = document.getElementById('second-issue-info');
var issueInfo3 = document.getElementById('third-issue-info');
var issueInfo4 = document.getElementById('fourth-issue-info');
var issueInfo5 = document.getElementById('fifth-issue-info');

issueInfo1.textContent = issues.issue1.info;
issueInfo2.textContent = issues.issue2.info;
issueInfo3.textContent = issues.issue3.info;
issueInfo4.textContent = issues.issue4.info;
issueInfo5.textContent = issues.issue5.info;










