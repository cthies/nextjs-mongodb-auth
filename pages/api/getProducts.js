import Product from "../../models/product";
import dbConnect from '../../utils/dbConnect';

export default async (req, res) => {
  try {
    dbConnect();
    const products = await Product.find({}).limit(20);
    res.json(products);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};