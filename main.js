//NAV ANIMATION

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    burger.classList.toggle("toggle");
  });
};

navSlide();

//NAV ANIMATION END

var issues = [
  {
    title: "1. Poverty",
    info: `     More than 700 million people, or 10% of the world population, still live in extreme poverty and are struggling to fulfill the most basic needs like health, education, and access to water and sanitation, to name a few. The majority of people living on less than $1.90 a day live in sub-Saharan Africa. Worldwide, the poverty rate in rural areas is 17.2 per cent — more than three times higher than in urban areas.\n\n    Having a job does not guarantee a decent living. In fact, 8 per cent of employed workers and their families worldwide lived in extreme poverty in 2018. Poverty affects children disproportionately. One out of five children live in extreme poverty. Ensuring social protection for all children and other vulnerable groups is critical to reduce poverty.\n\n    Poverty has many dimensions, but its causes include unemployment, social exclusion, and high vulnerability of certain populations to disasters, diseases and other phenomena which prevent them from being productive. Growing inequality is detrimental to economic growth and undermines social cohesion, increasing political and social tensions and, in some circumstances, driving instability and conflicts.`,
  },

  {
    title: "2. Hunger",
    info: `    It is time to rethink how we grow, share and consume our food. If done right, agriculture, forestry and fisheries can provide nutritious food for all and generate decent incomes, while supporting people-centered rural development and protecting the environment.
                            
    Right now, our soils, freshwater, oceans, forests and biodiversity are being rapidly degraded. Climate change is putting even more pressure on the resources we depend on, increasing risks associated with disasters, such as droughts and floods. Many rural women and men can no longer make ends meet on their land, forcing them to migrate to cities in search of opportunities. Poor food security is also causing millions of children to be stunted, or too short for the ages, due to severe malnutrition.
    
    A profound change of the global food and agriculture system is needed if we are to nourish the 821 million people who are hungry today and the additional 2 billion people expected to be undernourished by 2050. Investments in agriculture are crucial to increasing the capacity for agricultural productivity and sustainable food production systems are necessary to help alleviate the perils of hunger.`,
  },

  {
    title: "3. Health",
    info: `    Ensuring healthy lives and promoting the well-being at all ages is essential to sustainable development.
                            
    Significant strides have been made in increasing life expectancy and reducing some of the common killers associated with child and maternal mortality, but working towards achieving the target of less than 70 maternal deaths per 100,000 live births by 2030 would require improvements in skilled delivery care.
    
    Achieving the target of reducing premature deaths due to incommunicable diseases by 1/3 by the year 2030 would also require more efficient technologies for clean fuel use during cooking and education on the risks of tobacco.
    
    Many more efforts are needed to fully eradicate a wide range of diseases and address many different persistent and emerging health issues. By focusing on providing more efficient funding of health systems, improved sanitation and hygiene, increased access to physicians and more tips on ways to reduce ambient pollution, significant progress can be made in helping to save the lives of millions.`,
  },

  {
    title: "4. Education",
    info: `    Obtaining a quality education is the foundation to creating sustainable development. In addition to improving quality of life, access to inclusive education can help equip locals with the tools required to develop innovative solutions to the world’s greatest problems.
                            
    Over 265 million children are currently out of school and 22% of them are of primary school age. Additionally, even the children who are attending schools are lacking basic skills in reading and math. In the past decade, major progress has been made towards increasing access to education at all levels and increasing enrollment rates in schools particularly for women and girls. Basic literacy skills have improved tremendously, yet bolder efforts are needed to make even greater strides for achieving universal education goals. For example, the world has achieved equality in primary education between girls and boys, but few countries have achieved that target at all levels of education.
    
    The reasons for lack of quality education are due to lack of adequately trained teachers, poor conditions of schools and equity issues related to opportunities provided to rural children. For quality education to be provided to the children of impoverished families, investment is needed in educational scholarships, teacher training workshops, school building and improvement of water and electricity access to schools.`,
  },

  {
    title: "5. Water",
    info: `    Clean, accessible water for all is an essential part of the world we want to live in and there is sufficient fresh water on the planet to achieve this. However, due to bad economics or poor infrastructure, millions of people including children die every year from diseases associated with inadequate water supply, sanitation and hygiene.

    Water scarcity, poor water quality and inadequate sanitation negatively impact food security, livelihood choices and educational opportunities for poor families across the world. At the current time, more than 2 billion people are living with the risk of reduced access to freshwater resources and by 2050, at least one in four people is likely to live in a country affected by chronic or recurring shortages of fresh water. Drought in specific afflicts some of the world’s poorest countries, worsening hunger and malnutrition. Fortunately, there has been great progress made in the past decade regarding drinking sources and sanitation, whereby over 90% of the world’s population now has access to improved sources of drinking water.
    
    To improve sanitation and access to drinking water, there needs to be increased investment in management of freshwater ecosystems and sanitation facilities on a local level in several developing countries within Sub-Saharan Africa, Central Asia, Southern Asia, Eastern Asia and South-Eastern Asia.`,
  },
];

var issueContainer = [
  document.getElementById("issue-1"),
  document.getElementById("issue-2"),
  document.getElementById("issue-3"),
  document.getElementById("issue-4"),
  document.getElementById("issue-5"),
];

var issueTitle = [
  document.getElementById("first-issue"),
  document.getElementById("second-issue"),
  document.getElementById("third-issue"),
  document.getElementById("fourth-issue"),
  document.getElementById("fifth-issue"),
];

issueTitle[0].textContent = issues[0].title;
issueTitle[1].textContent = issues[1].title;
issueTitle[2].textContent = issues[2].title;
issueTitle[3].textContent = issues[3].title;
issueTitle[4].textContent = issues[4].title;

var issueInfo = [
  document.getElementById("first-issue-info"),
  document.getElementById("second-issue-info"),
  document.getElementById("third-issue-info"),
  document.getElementById("fourth-issue-info"),
  document.getElementById("fifth-issue-info"),
];

issueInfo[0].innerHTML = issues[0].info;
issueInfo[1].innerHTML = issues[1].info;
issueInfo[2].innerHTML = issues[2].info;
issueInfo[3].innerHTML = issues[3].info;
issueInfo[4].innerHTML = issues[4].info;

var affected = [
  document.getElementById("people-affected-1"),
  document.getElementById("people-affected-2"),
  document.getElementById("people-affected-3"),
  document.getElementById("people-affected-4"),
  document.getElementById("people-affected-5"),
];

affected[0].textContent = `700,000,000 +`;
affected[1].textContent = `800,000,000 +`;
affected[2].textContent = `5,000,000 +`;
affected[3].textContent = `265,000,000 +`;
affected[4].textContent = `785,000,000 +`;

//Filter

function filterFunction() {
  // Declare variables
  var issuesArray = Object.values(issues);
  var input, filter, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();

  // Loop through all items, and hide those that don't match the search query
  for (i = 0; i < issuesArray.length; i++) {
    item = issueTitle[i];
    txtValue = item.textContent || item.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      issueContainer[i].style.display = "";
    } else {
      issueContainer[i].style.display = "none";
    }
  }
}
