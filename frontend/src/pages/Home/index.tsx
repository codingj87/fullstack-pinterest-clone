import { useCallback, useEffect, useState } from "react";
import Header from "components/Header";
import Mainboard from "components/Mainboard";
import unsplash from "api/unsplash";
import { TextFormatSharp } from "@material-ui/icons";
import { ParamsType } from "components/Header";

export default function Home() {
  const [images, setImages] = useState<PhotosType>();
  const getImages = useCallback((params) => {
    return unsplash.get("https://api.unsplash.com/search", {
      params: params,
    });
  }, []);

  type PhotosType = {
    results: [];
    total: number;
    total_pages: number;
  };

  const onSearchSubmit = useCallback(
    async (params: ParamsType) => {
      // const {
      //   data: { photos },
      // } = await getImages(params);
      // console.log(photos);
      // setImages(photos);

      getImages(params).then((res) => {
        console.log();
        const {
          data: { photos },
        } = res;
        setImages(photos);
      });
    },
    [getImages]
  );

  // onSearchSubmit({ query: "bali", per_page: "20" });
  return (
    <>
      <div className="app">
        <Header onSearchSubmit={onSearchSubmit} />
        <Mainboard images={images} />
      </div>
    </>
  );
}
