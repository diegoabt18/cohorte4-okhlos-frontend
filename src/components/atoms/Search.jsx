import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { setData } from "../../redux/slices/loadDataSlice";
import { useDispatch } from "react-redux";

const Search = ({ datos, setFilter }) => {
  const dispatch = useDispatch()

  const payload = {
    data: [],
    columnas: datos.columnas,
    codeColumnas: datos.codeColumnas,
    name: datos.name,
    file: true
  }

  console.log(datos.data)

  const [searchInput, SetSearchInput] = useState({
    search: '',
  })

  const handleInputChange = (event) => {
    event.preventDefault()
    SetSearchInput({
      ...searchInput,
      [event.target.name]: event.target.value.toUpperCase()
    })
  }

  useEffect(() => {
    if (datos.file) {

      //item => array["1" "Alejandra Montañez Robayo", "alemonro27@gmail.com", 33, 1, 3135123438, "Mujer"]
      if (searchInput == "") {
        setFilter(data)

      } else {
        const filter = datos.data.filter(item => {
          const nameMayus = item[1].toUpperCase()
          if (nameMayus.includes(searchInput.search)) {
            return true
          }
          else {
            return false
          }

        })
        console.log(filter)
        payload.data = filter
        setFilter(payload)
      }
      //dispatch(setData(payload))
    }

  }, [searchInput])



  return (
    <div >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-transparent sr-only dark:text-gray-300"
      >
        Search
      </label>
      <div className="relative  ">
        <input

          type="search"
          id="default-search"
          name="search"
          className="block p-1 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  font-GilroyLight border border-gray-300 focus:ring-transparent focus:border-transparent dark:bg-transparent dark:border-transparent dark:placeholder-transparent dark:text-white dark:focus:ring-transparent dark:focus:border-transparent"
          placeholder="Search"
          onChange={handleInputChange}
          required
        />
        {searchInput.search}
        {/*
        <div className="absolute right-0 top-[50%] translate-y-[-50%]">
          <button
            type="submit"
            className="p-2.5 ml-2 text-sm font-medium text-black bg-transparent rounded-lg hover:bg-transparent focus:ring-1 focus:outline-none focus:ring-transparent dark:bg-transparent dark:hover:bg-transparent dark:focus:ring-transparent"
          >
            <Icon icon="akar-icons:search" style={{ display: 'inline' }} />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Search;
