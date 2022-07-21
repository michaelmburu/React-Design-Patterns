
import { NumberedList } from './NumberedList';
import { LargePersonListItem } from './people/LargePersonListItem';
import { SmallPersonListItem } from './people/SmallPersonListItem';
import { SmallProductListItem } from './products/SmallProductListItem';
import { RegularList } from './RegularLists';
import { LargeProductListItem } from './products/LargeProductListItem';
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
    price: "$120",
    description: "State of the art",
    rating: 4.2
 },
   {
    name: "Running Shoes",
    price: "$300",
    hairColor: "White",
    hobbies: "Air Jordans"
  }
]


// Displaying reusable unordered list and numbered list items
function App() {
  return (
   <>
    <RegularList items = {people} resourceName="person" itemComponent={SmallPersonListItem} />
    <NumberedList items = {products} resourceName="product" itemComponent={SmallProductListItem} />
    <NumberedList items={products} resourceName="product" itemComponent={LargeProductListItem} />
    <RegularList items = {people} resourceName="person" itemComponent={LargePersonListItem} />
   </>
  );
}

export default App;
