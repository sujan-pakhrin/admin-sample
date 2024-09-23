import db from "../db.js";
export const createBlog = (req, res) => {
  const blog_img = req.file.filename;
  const { title, description, user_id } = req.body;
  console.log(title, description);
  const created_at = new Date();
  const published_at = new Date();

  const sql =
    "Insert into blog(title, description,blog_img,user_id,created_at,published_at) value(?,?,?,?,?,?)";
  const values = [
    title,
    description,
    blog_img,
    user_id,
    created_at,
    published_at,
  ];
  db.query(sql, values, (err, result) => {
    if (err) return res.send(err);
    res.send({ data: result, message: "blog added sucessfully" });
  });
};

export const getBlogs = (req, res) => {
  const sql = "select * from blog";
  db.query(sql, (err, data) => {
    if (err) res.status(400).send(err);
    else res.status(200).send(data);
  });
};
export const getBlog = (req, res) => {
  const id = parseInt(req.params.id);
  const sql = "select * from blog where blog_id=?";
  db.query(sql, id, (err, data) => {
    if (err) res.status(400).send(err);
    else res.status(200).send(data[0]);
  });
};

export const deleteBlog = (req, res) => {
  const id = parseInt(req.params.id);
  const sql = "delete from blog where blog_id=?";
  db.query(sql, id, (err, data) => {
    if (err) res.status(400).send(err);
    else
      res.status(200).send({ message: "Blog deleted sucessfully", data: data });
  });
};

export const UBcount = (req, res) => {
    const sql = `
      SELECT 
        (SELECT COUNT(*) FROM user) AS userCount,
        (SELECT COUNT(*) FROM blog) AS blogCount
    `;
  
    db.query(sql, (err, data) => {
      if (err) {
        return res.status(400).send(err);
      }
      
      // Access the first row of the data array, since it's a single row result
      res.json(data[0]); // data[0] will contain { userCount: X, blogCount: Y }
    });
  };
  
