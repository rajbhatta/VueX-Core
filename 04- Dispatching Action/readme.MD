# Dispatching action to get the data #
- Once we do have state, we need to mutate the state to actually add the heros
- The only way we can mutate the state is through the mutation
<img src="img/img1.PNG"/>

## How it works? ##
- imagine we do have function called that accepts state as first parameter and payload as the second parameter
- push it into the state

# Firing of the mutation #
- commit one or more mutation that we want
<img src="img/img2.PNG"/>

# Example #
- Create actions
- use existing dataservice for getting data
- commit local mutation and pass heros
<img src="img/img3.PNG"/>

 # Create local mutation function inside mutations section #
<img src="img/img4.PNG"/>

# Modify the code with standard constant #
- define constant inside 
<img src="img/img5.PNG"/>

- Modfy store with newly created constant
<img src="img/img6.PNG"/>
- We did this to use the same magic string inside store
- Now import constant
<img src="img/img7.PNG"/>

# Who is going to call the action? #
- In vueJs component 
<img src="img/img8.PNG"/>

# There is better way to write this using helper function #
<img src="img/img9.PNG"/>

# Use mapAction #
<img src="img/img10.PNG"/>

# Import mapAction #
<img src="img/img11.PNG"/>