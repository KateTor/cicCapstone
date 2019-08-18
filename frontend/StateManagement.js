{/* <DogContainer/> //component that will be used to fetch dog data from database and then styled individually inside result and account pages...right? --this is essentially like the store - component did mount phase (useState/useEffect for each part of the app)

//think of each like a form that submits to database

use a couple of the routes to handle state when components load (results, account & shelter account)

<WelcomePage/>
<Router/>

App
    <div>
        <App> //stores state currently for quiz & results
            <Quiz>
                <QuestionCount/>
                <Question/>
                <AnswerOptions/>
            </Quiz>
            <Results/> //needs access to DogContainer or DogContainer needs access to this? //add in componentdidMount/fetch call to database in order to display results
        </App>
    </div>
//change to submit/results to take you to a new route - results page - useEffect makes a call - takes whats in state and gets matches and displays

User --//saves results in database to return dog matches to account page
    <div>
        <LogIn/> 
        <CreateAccount />
        <AccountPage /> //needs access to DogContainer
        <EmailAlert/> //needs access to DogContainer
    </div>


Shelter --//saves dogs from their id in database to account page
    <div>
        <LogIn/>
        <CreateAccount />
        <AccountPage /> //needs access to DogContainer
        <AddDogForm/>
    </div> */}
