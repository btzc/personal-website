import Personal from '../../assets/images/personal-website.PNG';
import Halp from '../../assets/images/javascript_example.PNG';
import Crwn from '../../assets/images/crwn-clothing.PNG';

const projectList = {
  projects: [
    {
      id: 1,
      project: 'Personal Website',
      technologies: ['React.js', 'SCSS', 'HTML', 'JavaScript'],
      description: 'I wanted to revamp my personal website to have more a "graduated university" feel rather than a "student" feel. And here it is! The fact that you\'re using it hopefully means I\'ve done a good job.',
      difficulties: 'Something that I was never strong at was design and CSS. This project was no exception. It took me a pretty long time to settle on a design that I felt wasn\'t too generic and was also something I could code.',
      solution: 'I ended up watching a lot of YouTube videos about design concepts which helped me better understand how users associate items together. For the not being good at CSS problem, I started a Udemy course which helped me improve my CSS dramatically and create this fully responsive website',
      live: 'http://brandonzhoucharles.com',
      source: 'https://github.com/btzc/personal-website',
      img: Personal
    },
    {
      id: 2,
      project: 'Halp CLI',
      technologies: ['Node.js'],
      description: 'When I was working on my laptop I found that my screen real estate was hard to manage because of all the tools I was using. To try and address this, I implemented a CLI tool which would let users query StackOverflow and Medium from their terminal instead of having to open a browser',
      difficulties: 'Finding a way to efficiently parse StackOverflow and Medium proved to be pretty difficult. The goal of the tool was to not only get all the information out of the StackOverflow or Medium answers, but also to make it look nice in the terminal. This required keeping track of which DOM nodes the information came from and being able to style them nicely in the terminal.',
      solution: 'The solution ended up being just some good ol\' fashioned recursion with the help of Cheerio.js. After putting the response from my HTTP request through Cheerio, I was able to query the response as if it was an actual DOM tree. This let me recurse through all the DOM nodes until I got to the information and keep a history of types of nodes while doing so. Keeping the history let me decide how I wanted to style the information when sending the answer back to the user.',
      source: 'https://github.com/btzc/halp-cli',
      img: Halp
    },
    {
      id: 3,
      project: 'CRWN Clothing',
      technologies: ['React.js', 'Redux', 'SCSS', 'HTML', 'JavaScript', 'Firebase', 'OAuth2', 'Stripe API', 'Node.js'],
      description: 'CRWN Clothing is a clothing marketplace that was created while following along with a Udemy course. The application lets users authenticate using OAuth, manage items in their cart, and checkout the items in their cart.',
      difficulties: 'The biggest challenge I faced when building this application was just understanding the concepts. I had never used React before this and I was not familiar with the concept of Single Page Applications at all. This made actually understanding and remembering the content taught in the videos very difficult.',
      solution: 'YouTube and Medium tutorials played a huge role in helping me get through this course. Whatever context I was missing I ended up finding on those platforms. Also being able to go back and rewatch the videos if I couldn\'t remember something helped solidify my understanding of the material.',
      live: 'https://crwn-live-btzc.herokuapp.com/',
      source: 'https://github.com/btzc/udemy-react-ztm',
      img: Crwn
    },
    {
      id: 4,
      project: 'Toogle',
      technologies: ['Node.js', 'JavaScript', 'HTML', 'CSS', 'MongoDB', 'JWT'],
      description: 'This web application is something I started working on post graduation. Reflecting back on my knowledge and all the experiences I had while I was a student, I realized that something I never really considered was how to create the tools that I use frequently from sctach. How does Express really work under the hood? How would I implement React Routing from scratch if it didn\'t exist? These were things that I couldn\'t answer immediately, and so I decided to change that by creating a productivity app. Toogle lets users manage upcoming tasks that they have to complete allowing them to focus on other things rather than always worrying about forgetting deadlines',
      difficulties: 'Just trying to conceptualize how to implement the various libraries I used to rely on was the hardest part. Also understanding how the flow of the application works without a backend framework like Express was difficult.',
      solution: 'Reading blogs and going through the source code of these libraries helped a lot. Since the Node community is really open-source friendly, a lot of the source code was available for me to look at. If I ever got super stuck on a concept and couldn\'t figure it out, it was nice to be able to look at the GitHub repository and see how they implemented it. Reading blogs about proper authentication and authorization flows also helped a lot. Learning how to use the Node.js Crypto library was crutial to ensure that user credentials and information were safe.',
      source: 'https://github.com/btzc/toogle',
    }
  ]
}

export default projectList
