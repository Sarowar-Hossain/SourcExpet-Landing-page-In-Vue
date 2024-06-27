import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Services from "../views/Services.vue";
import AboutUs from "../views/AboutUs.vue";
import Blog from "../views/Blog.vue";
import ContactUs from "../views/ContactUs.vue";
import BlogDetails from "../views/BlogDetails.vue";
import CreateBlog from "../views/CreateBlog.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "AboutUs", component: AboutUs },
  { path: "/contact", name: "ContactUs", component: ContactUs },
  { path: "/blog", name: "Blog", component: Blog },
  { path: "/blog/:id", name: "BlogDetails", component: BlogDetails },
  { path: "/create-blog", name: "CreateBlog", component: CreateBlog },
  { path: "/services", name: "Services", component: Services },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;