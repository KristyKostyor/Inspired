import { search } from "../render/renderSearch"
import { router } from "../router"

export const searchController = formSearch => {
    formSearch.addEventListener('submit', () => {

        router.navigate(`search?value=${formSearch.search.value}`);
    })
}