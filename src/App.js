
import { LargePersonListItem } from './people/LargePersonListItem';
import { SmallPersonListItem } from './people/SmallPersonListItem';
import { RegularList } from './RegularLists';
import { SplitScreen } from './SplitScreen';

const people = [
  {
     name: "Michael",
     age: 33,
     hairColor: "brown",
     hobbies: ["Walking", "Reading", "Video Games"]
  },
  {
      name: "Naomi",
      age: 21,
      hairColor: "black",
      hobbies: ["Swimming", "Reading", "Netflix"]
  },
  {
    name: "Jack",
    age: 21,
    hairColor: "black",
    hobbies: ["Sword Fighting", "Travelling", "Sushi"]
  }
]

const products = [
  {
     name: "Flatscreen TV",
     price: "$300",
     description: "Huge LCD Screen",
     rating: 3.8
  },
  {
    name: "Flatron TV",
    price: "120",
    description: "State of the art",
    rating: 4.2
 },
   {
    name: "Running Shoes",
    age: 21,
    hairColor: "White",
    hobbies: "Air Jordans"
  }
]


// Displaying reusable list and list items
function App() {
  return (
   <>
    <RegularList items = {people} resourceName="person" itemComponent={SmallPersonListItem} />
    <RegularList items = {people} resourceName="person" itemComponent={LargePersonListItem} />
   </>
  );
}

export default App;
