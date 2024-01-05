# In this lecture a learn about react Context
 - React context allows us to pass down and use (consume) data in whatever component   we need in our React app without using props.
    In other words, React context allows us to share data (state) across our components more easily.

# When should you use React context?
 - React context is great when you are passing data that can be used in any component in your application.

  - These types of data include:
    - Theme data (like dark or light mode)
    - User data (the currently authenticated user)
    - Location-specific data (like user language or locale)

# What problems does React context solve?
  - React context helps us avoid the problem of props drilling.
  - Props drilling is a term to describe when you pass props down multiple levels to a nested component, through components that don't need it.
  - Here is an example of props drilling. In this application, we have access to theme data that we want to pass as a prop to all of our app's components.
  - As you can see, however, the direct children of App, such as Header, also have to pass the theme data down using props.

# How do I use React context?
 - There are four steps to using React context:
   - Create context using the createContext method.
   - Take your created context and wrap the context provider around your component tree.
   - Put any value you like on your context provider using the value prop.


