# Dummy To Do list
## Practice project for Vue learninig

### **_Introduction_**
After finishing The Net Ninja - Vue Beginner Tutorial, I was not fully ready to jump to my own big side-project. I needed to practice more, mainly the composition API and fetching data part. To Do app is on every beginner's list, so it was time to make one in Vue. 

### **_Used Technologies_**
1. Vue 3 Js
2. Bootstrap 5
3. Json Placeholder

**Aim of the Project**
It is a practice mini project to get more hands-on experience with Vue.

**Challenges within the Project**

 I am 100% certain I am going to have challenges with the CRUD methods. We will see. 

 **Day 2 with CRUD app**
 
 Already facing with some problems. I can see in the console that the CRUD operations are working, but it doesnt update or re-render on the site... I think I need to use lifecycle hooks, but not sure which one and how to connect it to a click event (if it is even possible).

 I also tried to make this application in option Api (Vue 2 style) - but I got stucked, so I jumped back and continued with the composition Api. My plan is to still try the "older" version too later.

 **Day 3 with CRUD app**

 After yesterday problem with re-render, I went back to take a look at option API version. It was some stupid problem (wrong folder reference) adn therefore it did not load the page first. The I managed to add new task and re-render it too. I mixed up that at option API, I dont need to use ref to read out value from an input field.

 I was still stuck with the re-render, when I realized I used again ref inside the fetch method... Deleting that and saving the fetch data as it is (proxy) solved all my problems :D Suddenly all the function worked.

 Now time to check and finish the CRUD methods in the composition API. First I realized again that all the re-render did not work because I used shallowRef instead if ref. Ref is "more reactive", for any operation and change it will trigger a re-render.
 
 Then showing the input field to edit task left. I declared the showInput as a ref(false) and then tried to change it by clicking to a button. It changed it, but did not rendered it... The solution was in the end, I declared showInput as a ref("") and assigned false or true value when a button was clicked.

## **_What have I learned_**
Vue and more Vue.

I need to be more clear when and how to use ref, shallowRef in the future. I am still not sure why and what cases I need to use which one, but it will come. Other challenge within Vue is not mixing up the different "method" and approach between option and composition API. 

It was a great mini project to see how the CRUD operation can work and even though I "suffered" here and there, I am really happy I figured out and found solution for all my problems. :)

## Deployed: 2022.October