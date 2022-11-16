import { useEffect, useState } from "react";
import { CategoryApi } from "../api/category";
import ICategory from "../models/Category";

const useGetCategory = (
  _category: string
): { category: ICategory | undefined; loading: boolean; error: any } => {
  const [category, setcategory] = useState<ICategory | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<undefined>(undefined);
  useEffect(() => {
    setLoading(true);
    CategoryApi.getCategory(_category)
      .then((r) => {
        setLoading(false);
        setcategory(r);
      })
      .catch((e) => {
        setLoading(false);
        setError(error);
        setcategory(undefined);
      });
    return () => {};
  }, [_category]);

  return { category, loading, error };
};

export default useGetCategory;
