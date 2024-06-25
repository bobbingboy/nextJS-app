import Link from "next/link";
import { useEffect, useState } from "react";

function MealsPage() {
  const [mealsList, setMealsList] = useState([]);

  useEffect(() => {
    fetch("/api/meals")
      .then((response) => response.json())
      .then((data) => setMealsList(data));
  }, []);

  return (
    <div>
      <h1>Meals</h1>
      <div className="w-full flex flex-col justify-center items-center">
       <Link href="/meals/share">go to meal</Link>
       <Link href="/meals/1">go to meal 1</Link>
       <Link href="/meals/2">go to meal 2</Link>
      </div>
    </div>
  );
}

export default MealsPage;