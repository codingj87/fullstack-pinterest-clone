import { useCallback, useState } from "react";
import Header from "components/Header";
import Mainboard from "components/Mainboard";
import unsplash from "api/unsplash";
import { ImageParamsType } from "components/Header";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

// export type ImagesDataType = {
//   results: [],
//   total: number,
//   total_pages: number,
// };

export default function Home() {
  // const [images, setImages] = useState<ImagesDataType>();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const getImages = useCallback((params) => {
    return unsplash.get("https://api.unsplash.com/search", {
      params: params,
    });
  }, []);

  const onSearchSubmit = useCallback(
    async (params) => {
      console.log("params", params);
      setLoading(true);
      const {
        data: {
          photos: { results },
        },
      } = await getImages(params);
      setLoading(false);
      console.log(22222, results);
      console.log("images", images);
      let data = [];
      if (params?.page) {
        data = [...images, ...results];
      } else {
        data = results;
      }
      console.log("data", data);
      setImages(data);

      // getImages(params).then((res) => {
      //   const {
      //     data: {
      //       photos: { results },
      //     },
      //   } = res;
      //   console.log(22222, results);
      //   console.log("images", images);
      //   const data = [...images, ...results];
      //   console.log("data", data);
      //   setImages(data);
      // });
    },
    [getImages, images]
  );

  return (
    <>
      <div className="app">
        <Header onSearchSubmit={onSearchSubmit} />
        <Mainboard onSearchSubmit={onSearchSubmit} images={images} />
        {loading && <CircularProgress />}
      </div>
    </>
  );
}
