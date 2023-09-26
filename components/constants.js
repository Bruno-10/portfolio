const sections = [
  {
    hover: false,
    title: {
      text: 'Job title',
      classes: '',
    },
    img: {
      width: '48px',
      height: '48px',
      classes: 'ml-5',
      staticSrc: require(`assets/icons/white/jobTitle.svg`),
      src: require(`assets/icons/white/jobTitle.gif`),
    },
    childs: {
      type: 'span',
      content: 'Senior Fullstack Developer',
    },
  },
  {
    hover: false,
    title: {
      text: 'Age',
      classes: 'mr-8',
    },
    img: {
      width: '48px',
      height: '48px',
      classes: 'ml-5',
      staticSrc: require(`assets/icons/white/age.svg`),
      src: require(`assets/icons/white/age.gif`),
    },
    childs: {
      type: 'span',
      content: '24',
    },
  },
  {
    hover: false,
    title: {
      text: 'Location',
      classes: '',
    },
    img: {
      width: '48px',
      height: '48px',
      classes: 'ml-5',
      staticSrc: require(`assets/icons/white/location.svg`),
      src: require(`assets/icons/white/location.gif`),
    },
    childs: {
      type: 'span',
      content: 'Buenos Aires/Argentina',
    },
  },
  {
    hover: false,
    title: {
      text: 'Nacionalities',
      classes: '',
    },
    img: {
      width: '48px',
      height: '48px',
      classes: 'mr-5',
      staticSrc: require(`assets/icons/white/nacionalities.svg`),
      src: require(`assets/icons/white/nacionalities.gif`),
    },
    childs: {
      type: 'span',
      content: 'Argentinian / Italian',
    },
  },
  {
    hover: false,
    title: {
      text: 'Skills',
      classes: 'ml-8',
    },
    img: {
      width: '48px',
      height: '48px',
      classes: 'mr-5',
      staticSrc: require(`assets/icons/white/technologies.svg`),
      src: require(`assets/icons/white/technologies.gif`),
    },
    childs: {
      type: 'rating',
      content: [
        {
          name: 'Communication',
          rating: 5,
        },
        {
          name: 'Code speed',
          rating: 5,
        },
        {
          name: 'Discipline',
          rating: 5,
        },
        {
          name: 'Curiosity',
          rating: 5,
        },
      ],
    },
  },
  {
    hover: false,
    title: {
      text: 'Technologies',
      classes: '',
    },
    img: {
      width: '48px',
      height: '48px',
      classes: 'mr-5',
      staticSrc: require(`assets/icons/white/skills.svg`),
      src: require(`assets/icons/white/skills.gif`),
    },
    childs: {
      type: 'rating',
      content: [
        {
          name: 'Nuxt.JS',
          rating: 5,
        },
        {
          name: 'Vue.JS',
          rating: 5,
        },
        {
          name: 'React.JS',
          rating: 3.5,
        },
        {
          name: 'Go',
          rating: 3,
        },
      ],
    },
  },
]

export default sections
