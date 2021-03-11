# __Spanish La Liga__
Live Link: https://spanish-la-liga-devakash.netlify.app/

## **_Website features_** :

> User can see Different team card of Spanish La Liga in Home UI 

> If the user hovers on the team card then the user will watch a mind-blowing effect.

> If the user clicks the Explore button, the user will see the details of the team.
    
> On the details page, the user will see the team logo, banner, stadium, team details, and history. at end of this page, the user will see every team's social media linked icon. All information is dynamic.


## **_Usage Function_** :
1. Hooks 
    * useEffect()
    ```js
    useEffect(() =>{
        fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=Spanish%20La%20Liga")
        .then((response) => response.json())
        .then( data => setTeams(data.teams))
    },[])
    ```
    * useState()
    ```js
    const [name, setName] = useState([])
    ```
    * useParams()
    ```js
    const {id} = useParams()
    ```
2. React Router
    * Router
    * Route
    * Switch
    * Link

    
    | Thank you very much. |
    | ------------- |