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

var goal1Title = document.createElement("img");
var goal2Title = document.createElement("img");
var goal3Title = document.createElement("img");
var goal4Title = document.createElement("img");
var goal5Title = document.createElement("img");

goal1Title.src = "./images-files/1-no-poverty.png";
goal1Title.alt = "1 No Poverty";
goal2Title.src = "./images-files/2-zero-hunger.png";
goal2Title.alt = "2 Zero Hunger";
goal3Title.src = "./images-files/3-good-health.png";
goal3Title.alt = "3 Good Health and Well-Being";
goal4Title.src = "./images-files/4-quality-education.png";
goal4Title.alt = "4 Quality Education";
goal5Title.src = "./images-files/5-gender-equality.png";
goal5Title.alt = "5 Gender Equality";

var goals = [
  {
    title: goal1Title,
    info: `     More than 700 million people, or 10% of the world population, still live in extreme poverty and are struggling to fulfill the most basic needs like health, education, and access to water and sanitation, to name a few. The majority of people living on less than $1.90 a day live in sub-Saharan Africa. Worldwide, the poverty rate in rural areas is 17.2 per cent — more than three times higher than in urban areas.\n\n    Having a job does not guarantee a decent living. In fact, 8 per cent of employed workers and their families worldwide lived in extreme poverty in 2018. Poverty affects children disproportionately. One out of five children live in extreme poverty. Ensuring social protection for all children and other vulnerable groups is critical to reduce poverty.\n\n    Poverty has many dimensions, but its causes include unemployment, social exclusion, and high vulnerability of certain populations to disasters, diseases and other phenomena which prevent them from being productive. Growing inequality is detrimental to economic growth and undermines social cohesion, increasing political and social tensions and, in some circumstances, driving instability and conflicts.`,
  },

  {
    title: goal2Title,
    info: `    It is time to rethink how we grow, share and consume our food. If done right, agriculture, forestry and fisheries can provide nutritious food for all and generate decent incomes, while supporting people-centered rural development and protecting the environment.
                            
    Right now, our soils, freshwater, oceans, forests and biodiversity are being rapidly degraded. Climate change is putting even more pressure on the resources we depend on, increasing risks associated with disasters, such as droughts and floods. Many rural women and men can no longer make ends meet on their land, forcing them to migrate to cities in search of opportunities. Poor food security is also causing millions of children to be stunted, or too short for the ages, due to severe malnutrition.
    
    A profound change of the global food and agriculture system is needed if we are to nourish the 821 million people who are hungry today and the additional 2 billion people expected to be undernourished by 2050. Investments in agriculture are crucial to increasing the capacity for agricultural productivity and sustainable food production systems are necessary to help alleviate the perils of hunger.`,
  },

  {
    title: goal3Title,
    info: `    Ensuring healthy lives and promoting the well-being at all ages is essential to sustainable development.
                            
    Significant strides have been made in increasing life expectancy and reducing some of the common killers associated with child and maternal mortality, but working towards achieving the target of less than 70 maternal deaths per 100,000 live births by 2030 would require improvements in skilled delivery care.
    
    Achieving the target of reducing premature deaths due to incommunicable diseases by 1/3 by the year 2030 would also require more efficient technologies for clean fuel use during cooking and education on the risks of tobacco.
    
    Many more efforts are needed to fully eradicate a wide range of diseases and address many different persistent and emerging health issues. By focusing on providing more efficient funding of health systems, improved sanitation and hygiene, increased access to physicians and more tips on ways to reduce ambient pollution, significant progress can be made in helping to save the lives of millions.`,
  },

  {
    title: goal4Title,
    info: `    Obtaining a quality education is the foundation to creating sustainable development. In addition to improving quality of life, access to inclusive education can help equip locals with the tools required to develop innovative solutions to the world’s greatest problems.
                            
    Over 265 million children are currently out of school and 22% of them are of primary school age. Additionally, even the children who are attending schools are lacking basic skills in reading and math. In the past decade, major progress has been made towards increasing access to education at all levels and increasing enrollment rates in schools particularly for women and girls. Basic literacy skills have improved tremendously, yet bolder efforts are needed to make even greater strides for achieving universal education goals. For example, the world has achieved equality in primary education between girls and boys, but few countries have achieved that target at all levels of education.
    
    The reasons for lack of quality education are due to lack of adequately trained teachers, poor conditions of schools and equity issues related to opportunities provided to rural children. For quality education to be provided to the children of impoverished families, investment is needed in educational scholarships, teacher training workshops, school building and improvement of water and electricity access to schools.`,
  },

  {
    title: goal5Title,
    info: `    Gender equality is not only a fundamental human right, but a necessary foundation for a peaceful, prosperous and sustainable world. 

    There has been progress over the last decades: More girls are going to school, fewer girls are forced into early marriage, more women are serving in parliament and positions of leadership, and laws are being reformed to advance gender equality. 
    
    Despite these gains, many challenges remain: discriminatory laws and social norms remain pervasive, women continue to be underrepresented at all levels of political leadership, and 1 in 5 women and girls between the ages of 15 and 49 report experiencing physical or sexual violence by an intimate partner within a 12-month period.
    
    The effects of the COVID-19 pandemic could reverse the limited progress that has been made on gender equality and women’s rights.  The coronavirus outbreak exacerbates existing inequalities for women and girls across every sphere – from health and the economy, to security and social protection. 
    
    Women play a disproportionate role in responding to the virus, including as frontline healthcare workers and carers at home. Women’s unpaid care work has increased significantly as a result of school closures and the increased needs of older people. Women are also harder hit by the economic impacts of COVID-19, as they disproportionately work in insecure labour markets. Nearly 60 per cent of women work in the informal economy, which puts them at greater risk of falling into poverty. 
    
    The pandemic has also led to a steep increase in violence against women and girls. With lockdown measures in place, many women are trapped at home with their abusers, struggling to access services that are suffering from cuts and restrictions. Emerging data shows that, since the outbreak of the pandemic, violence against women and girls – and particularly domestic violence – has intensified.`,
  },
];

var goalContainer = [
  document.getElementById("goal-1"),
  document.getElementById("goal-2"),
  document.getElementById("goal-3"),
  document.getElementById("goal-4"),
  document.getElementById("goal-5"),
];

var goalTitle = [
  document.getElementById("first-goal"),
  document.getElementById("second-goal"),
  document.getElementById("third-goal"),
  document.getElementById("fourth-goal"),
  document.getElementById("fifth-goal"),
];

goalTitle[0].textContent = "";
goalTitle[0].appendChild(goals[0].title);
goalTitle[1].textContent = "";
goalTitle[1].appendChild(goals[1].title);
goalTitle[2].textContent = "";
goalTitle[2].appendChild(goals[2].title);
goalTitle[3].textContent = "";
goalTitle[3].appendChild(goals[3].title);
goalTitle[4].textContent = "";
goalTitle[4].appendChild(goals[4].title);

var goalInfo = [
  document.getElementById("first-goal-info"),
  document.getElementById("second-goal-info"),
  document.getElementById("third-goal-info"),
  document.getElementById("fourth-goal-info"),
  document.getElementById("fifth-goal-info"),
];

goalInfo[0].innerHTML = goals[0].info;
goalInfo[1].innerHTML = goals[1].info;
goalInfo[2].innerHTML = goals[2].info;
goalInfo[3].innerHTML = goals[3].info;
goalInfo[4].innerHTML = goals[4].info;

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
  var goalsArray = Object.values(goals);
  var input, filter;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();

  // Loop through all items, and hide those that don't match the search query
  for (i = 0; i < goalsArray.length; i++) {
    item = goalsArray[i].title.alt;
    if (item.toUpperCase().indexOf(filter) > -1) {
      goalContainer[i].style.display = "";
    } else {
      goalContainer[i].style.display = "none";
    }
  }
}
