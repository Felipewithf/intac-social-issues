// Resource data for each image
const resources = {
  img1: {
    image: "img/m1.jpeg",
    imageSubtitle: "Illustration",
    title: "Casta Painting / Ownership",
    description:
      "Currently, many Mexican migrants are at risk of being enslaved by traffickers. They are stripped of their human identity and perceived only as merchandise.",
    links: [
      {
        text: `Mexican migrant workers, <br /> risk of enslavement on farms`,
        url: "https://www.reuters.com/article/world/mexicos-indigenous-migrant-workers-risk-enslavement-on-farms-rights-commission-idUSKBN1DY2IU/",
      },
    ],
  },
  img2: {
    image: "img/m2.jpeg",
    imageSubtitle: "Illustration",
    title: "Casta Painting / Economic Value",
    description:
      "In Mexico, there is a correlation between the majority of people living in poverty and their ethnicity, a situation that can be traced back to colonialism.",
    links: [
      {
        text: `Mexico share population poverty and <br /> ethnicity severity`,
        url: "https://www.statista.com/statistics/1046617/mexico-share-population-poverty-ethnicity-severity/",
      },
    ],
  },
  img3: {
    image: "img/m3.jpeg",
    imageSubtitle: "Illustration",
    title: "Casta Painting/ Social Value",
    description:
      "Although the majority of the population in Mexico is mixed race, there is discrimination against darker skin tones, usually associated with poverty and low education.",
    links: [
      {
        text: "Racial inequality in Mexico",
        url: "https://www.vanderbilt.edu/lapop/news/121317.mexico-theconversation.pdf",
      },
    ],
  },
  img4: {
    image: "img/m4.jpeg",
    imageSubtitle: "Illustration",
    title: "Casta Painting/ Rating by Application",
    description:
      "There is an economic gap in the Mexican labor market due to ethnicity and skin color; indigenous people are at a disadvantage in the workplace.",
    links: [
      {
        text: "Labor Market Discrimination",
        url: "https://iberoamericana.se/articles/10.16993/iberoamericana.433",
      },
    ],
  },
  img5: {
    image: "img/m5.jpeg",
    imageSubtitle: "Illustration",
    title: "Casta Painting/ Colonialism",
    description:
      "In Mexico there is an identity crisis, because capitalism and colonialism have permeated the culture, leaving many Mexicans without their traditions.",
    links: [
      {
        text: "The Rise of Latino White Supremacy",
        url: "https://www.newyorker.com/news/daily-comment/the-rise-of-latino-white-supremacy",
      },
    ],
  },
  img6: {
    image: "img/rj1.jpg",
    imageSubtitle:
      "8x10 cyanotype created from a digital composite of imagery related to bigotry",
    title: "Knees ",
    description:
      "The quote is credited to Toni Morrison, during an interview, discusses racism as it exists woven into people's character. Her statement summarizes that people who hold positions of power often depend upon the oppression and subjugation of others to justify their own superiority. If your worth is so reliant upon someone being considered less than you, when you take them out of the equation, what's left? This quote, I think can be applied to much more than just racism in our culture, but bigotry as a whole. History at its root is saturated with people who were taught and would go on to teach others, their value directly correlates to the enforcement of complete fallacies. Created only to help rich white men get power and keep it.",
    links: [
      {
        text: "White supremacy culture ",
        url: "https://www.whitesupremacyculture.info/",
      },
      {
        text: "Toni Morrison Takes White Supremacy",
        url: "https://www.youtube.com/watch?v=6S7zGgL6Suw&ab_channel=CultureContent",
      },
    ],
  },
  img7: {
    image: "img/rj2.jpg",
    imageSubtitle: "8x10 cyanotype created from a piece of WWII propaganda.",
    title: `I’m Proud..`,
    description: `8x10 cyanotype created from a piece of WWII propaganda. When I saw it for the first time, all I could think about was the culture around women's rights in the United States today. We have regressed as a society, not only in the legislation that was supposed to protect us, but culturally, puritanical beliefs are more popular with young people, especially young women themselves, than they have been in a long time. Conservative media targeting young men to profit off of their naivety and media dependencies has led to a surge in outspoken misogyny. It's utterly insane to see women who not only choose to participate in their oppression but run full speed toward their demise. White women and their persistent complicity and ignorance towards bigotry and racism for male approval continue to be one of the biggest contributors to subjugation and oppression.`,
    links: [
      {
        text: `Sexism as a gateway drug into <br /> white supremacist movements`,
        url: "https://csw.ucla.edu/research/sexism-as-a-gateway-drug-into-white-supremacist-movements",
      },
    ],
  },
  img8: {
    image: "img/rj3.jpg",
    imageSubtitle: "8x10 cyanotype created from a digital composite.",
    title: "Control.",
    description:
      "The quote is taken from an open letter written in 1972 to white women of the South by Anne Braden. In the letter, she is pleading with any and all white women for their help in getting a wrongfully convicted young black man a stay of execution. In the letter, she discusses her own experiences as a white woman coming to terms with how her position had been weaponized by the powers that be to fuel the unlawful persecution of black men. Braden goes on to explain that none of the issues our society faces can change until women demand it, and that we can only overcome our own oppression when we reject the privileges granted to us from our whiteness.",
    links: [
      {
        text: `Letter to White Southern Women`,
        url: "https://newsreel.org/guides/Anne-Braden-A-Letter-to-White-Southern-Women.pdf",
      },
      {
        text: `The Feminist Fight for the Right to Vote`,
        url: "https://www.youtube.com/watch?v=6S7zGgL6Suw&ab_channel=CultureContent",
      },
    ],
  },
  img9: {
    image: "./img/f1.png",
    imageSubtitle: "Archive Photograph: Saskatchewan Archives Board",
    title: "Replacement",
    description:
      "Children were given Christian names, forbidden from speaking their ancestral languages, and taught to be ashamed of their heritage.",
    links: [
      {
        text: "Children transformed",
        url: "https://worldschildrensprize.org/children-transformed",
      },
      {
        text: "Indigenous languages are at risk of extinction",
        url: "https://www.ohchr.org/en/stories/2019/10/many-indigenous-languages-are-danger-extinction",
      },
    ],
  },
  img10: {
    image: "img/f2.png",
    imageSubtitle: "Digital Composite",
    title: "Repetition",
    description:
      "Christian missionaries and churches, acting with government support, believed that Indigenous peoples needed to be 'saved' — spiritually, morally, and culturally.",
    links: [
      {
        text: `Francis Begs Forgiveness for ‘Evil’ Christians <br /> Inflicted on Indigenous People`,
        url: "https://www.nytimes.com/live/2022/07/25/world/pope-francis-canada-visit",
      },
    ],
  },
  img11: {
    image: "img/f3.png",
    imageSubtitle:
      "Archival Photograph: Old Sun Indian Residential School in Gleichen Alberta",
    title: "Unlearning",
    description:
      "With the lowest rate in completing university, the long shadow of colonialism continues to shape life outcomes for Indigenous peoples in Canada.",
    links: [
      {
        text: "Close the education gap now",
        url: "https://www.theglobeandmail.com/opinion/editorials/article-reconciliation-close-the-education-gap-now/",
      },
    ],
  },
  img12: {
    image: "img/f4.png",
    imageSubtitle: "Archival Photograph: Archives Deschâtelets-NDC",
    title: "Head Count",
    description:
      "The widespread ignorance about residential schools is not accidental, but rather a direct reflection of Canada’s deeply rooted colonial history and its ongoing legacy. From the beginning, colonial governments and institutions in Canada worked to suppress Indigenous voices and histories. Residential schools themselves were part of this system, designed to erase Indigenous identities.",
    links: [
      {
        text: `215 potential unmarked graves at <br />the former Kamloops Indian Residential School`,
        url: "https://worldschildrensprize.org/children-transformed",
      },
      {
        text: "Missing and murdered Indigenous women and girls",
        url: "https://cupe.ca/justice-long-overdue-missing-murdered-indigenous-women-girls-and-two-spirit-people",
      },
    ],
  },
};
