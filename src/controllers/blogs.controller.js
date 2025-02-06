import { BlogsTable } from "../config/firebase-config.js";
import Blog from "../models/Blog.js";
import responseHandler from "../handlers/response.handler.js";
import {
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

export const createBlog = async (req, res) => {
  try {
    const {
      type,
      title,
      slug,
      status,
      author,
      coverImageURL,
      coverDescription,
      content,
    } = req.body;

    // Check slug
    const blogSlugSnap = await getDocs(
      query(BlogsTable, where("slug", "==", slug))
    );
    if (blogSlugSnap.size > 0) {
      return responseHandler.badRequest(
        res,
        "Berita dengan judul tersebut sudah ada"
      );
    }

    const blog = new Blog(
      type,
      title,
      slug,
      status,
      author,
      coverImageURL,
      coverDescription,
      content
    );
    const blogSnap = await addDoc(BlogsTable, blog.toObject());

    responseHandler.created(res, {
      id: blogSnap.id,
      ...blog,
    });
  } catch (error) {
    responseHandler.error(res);
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const { status } = req.query;

    const blogs = [];
    const blogsSnap = await getDocs(BlogsTable);

    for (const blogDoc of blogsSnap.docs) {
      const blog = Blog.getData(blogDoc);
      if (blog.type === "blog") {
        if (status) {
          if (blog.status === status) {
            blogs.push(blog);
          }
        } else {
          blogs.push(blog);
        }
      }
    }

    responseHandler.ok(res, blogs);
  } catch (error) {
    responseHandler.error(res);
  }
};

export const getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const blogSnap = await getDocs(
      query(BlogsTable, where("slug", "==", slug))
    );
    if (blogSnap.empty) return responseHandler.notFound(res);

    const blog = Blog.getData(blogSnap.docs[0]);

    responseHandler.ok(res, blog);
  } catch (error) {
    responseHandler.error(res);
  }
};

export const editBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const dataReq = req.body;

    const blogRef = doc(BlogsTable, blogId);
    const blogSnap = await getDoc(blogRef);
    if (!blogSnap.exists()) return responseHandler.notFound(res);

    dataReq.updatedAt = new Date();
    await updateDoc(blogRef, dataReq);

    responseHandler.ok(res);
  } catch (error) {
    responseHandler.error(res);
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { blogId } = req.params;

    const blogRef = doc(BlogsTable, blogId);
    const blogSnap = await getDoc(blogRef);
    if (!blogSnap.exists()) return responseHandler.notFound(res);

    await deleteDoc(blogRef);

    responseHandler.ok(res);
  } catch (error) {
    responseHandler.error(res);
  }
};
