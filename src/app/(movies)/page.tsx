"use client";
import { MovieGrid, Title } from "@/components";
import { RootState } from "@/store";
import { Button, Image, Spinner, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { FaPlusCircle } from "react-icons/fa";
import { MdLocalMovies, MdMeetingRoom } from "react-icons/md";
import { LuPopcorn } from "react-icons/lu";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { clearUser } from "@/store/slices/userSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation"
import { useGetMoviesQuery } from "@/store/services/movieApi";


export default function MoviesPage() {

  const role = useSelector((state: RootState) => state.user.role);
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  const { data: movies } = useGetMoviesQuery({})

  const router = useRouter()

  async function verifyToken(){
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify_token`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${Cookies.get("token")}`
        }
      })
      if (response.status === 401){
        Cookies.remove("token")
        dispatch(clearUser())
      }
  }

  useEffect(()=>{
    verifyToken()
  },[])

  return (
    <>
      <div >
        {role === "admin" && (
          <div className="flex bg-five rounded-lg mt-5 border-2 border-two">
            <div className="text-black py-2 ml-2 md:ml-12 mt-3 flex flex-col md:w-1/2">
              <span className="font-bold text-one">Welcome, {user?.email}</span>
              <span className="font-bold"><span className="text-one">Role:</span> {role.charAt(0).toUpperCase() + role.slice(1)}</span>
              <p className="font-semibold">What would you like to do today?</p>
              <div className="flex mt-2">
                <Button startContent={<FaPlusCircle className="text-four" size={20}/>}
                className="bg-one text-four font-semibold border-three border-2 mr-2 "
                onClick={()=>router.push('/new_employee')}
                > Employee</Button>

                <Dropdown>
                  <DropdownTrigger>
                    <Button 
                      variant="bordered"
                      startContent={<LuPopcorn className="text-four" size={24}/>}
                      className="bg-one text-four font-semibold border-three border-2 mr-2 " 
                    >
                      Cinema
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="new_movie" startContent={<MdLocalMovies className="text-one" size={24}/>} > <div className="font-semibold " onClick={()=>router.push('/new_movie')}>New Movie</div></DropdownItem>
                    <DropdownItem key="new_room" startContent={<MdMeetingRoom className="text-one" size={24}/>}> <div className="font-semibold " onClick={()=>router.push('/new_room')}>New Room</div></DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                
              </div>
            </div>
            <div className="w-2/3 md:flex hidden md:items-center">
              <Image src="https://www.marketingdirecto.com/wp-content/uploads/2017/03/disney-116655.jpg" width={216} height={150} isZoomed className="ml-2"/>
              <Image src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8e7466e-ff39-4e71-8a49-cc9008218cc5/dgq7ajr-d40138b7-2868-49b1-a834-771af3dcc1f4.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q4ZTc0NjZlLWZmMzktNGU3MS04YTQ5LWNjOTAwODIxOGNjNVwvZGdxN2Fqci1kNDAxMzhiNy0yODY4LTQ5YjEtYTgzNC03NzFhZjNkY2MxZjQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rRC5peZajV812Nfgi7UKeB61Dd1nBR4bDhBsKx-ZNCM" width={220} isZoomed className="ml-2 h-32"/>
              <Image src="https://i.ytimg.com/vi/bNJW113tbKk/maxresdefault.jpg" width={220} isZoomed className="ml-2 h-32" />
            </div>
          </div>
        )}
      </div>
      <Title title="All Movies" className="mb-10 pt-2 ps-4" />

      {
        movies ? <MovieGrid movies={movies} /> : <div className="flex justify-center items-center">
          <Spinner color="warning"/>
        </div>
      }
    </>
  );
}
