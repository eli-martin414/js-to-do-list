# Lessons Learned  
Lessons learned while working on the course:  
- how to declare variables in JS:
  - let creates a variable only accessible in the block where it's defined
  - const also has block accessibility, but cannot be reassigned or redefined (as the name implies)
  - var creates a variable accessible throghout the function it's created in
- what a text node is
  - all viewable text in HTML is wrapped as a text node
  - it allows us to take text in JavaScript and place it into HTML
- what localStorage is
  - localStorage is a read-only property of the 'window' interface that allows you to access a Storage object for the Document's origin
  - the stored data is saved across browser sessions and has no expiration time (unlike sessionStorage, which is similar but gets cleared when the page session ends)
