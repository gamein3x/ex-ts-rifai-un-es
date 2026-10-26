/* In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id).
 Questa funzione accetta un id di una ricetta e deve:
-Recuperare la ricetta da https://dummyjson.com/recipes/{id}
-Estrarre la proprietà userId dalla ricetta
-Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
-Restituire la data di nascita dello chef
Note del docente
Scrivi la funzione getChefBirthday(id), che deve:
Essere asincrona (async).
Utilizzare await per chiamare le API.
Restituire una Promise con la data di nascita dello chef.
Gestire gli errori con try/catch
Esempio di utilizzo
"
getChefBirthday(1)
  .then(birthday => console.log("Data di nascita dello chef:", birthday))
  .catch(error => console.error("Errore:", error.message));
"
Esempio di output:
> Data di nascita dello chef: 1990-06-15 */

// Solo le proprietà che usiamo delle risposte di dummyjson
interface Recipe {
    id: number;
    name: string;
    userId: number;
}

interface User {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: string;
}

async function getChefBirthday(id: number): Promise<string> {

    if (typeof id !== "number") {
        throw new Error("Id errato");
    };

    const recipe: Response = await fetch(`https://dummyjson.com/recipes/${id}`);
    const recipeRes: Recipe = await recipe.json();
    const user: number = recipeRes.userId;

    if (!user) {
        throw new Error("User errato");
    };

    const chef: Response = await fetch(`https://dummyjson.com/users/${user}`);
    const chefRes: User = await chef.json();
    const birthday: string = chefRes.birthDate;

    return birthday;
}


getChefBirthday(2)
    .then((response: string): void => console.log(`Data di nascita dello chef: ${response}`))
    .catch((error: unknown): void => console.error(error))
    .finally((): void => console.log(`Codice eseguito`))


