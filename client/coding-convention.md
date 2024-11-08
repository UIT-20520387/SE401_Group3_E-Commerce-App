### 1. File Naming

- Sử dụng PascalCase cho tên tất cả components.
  **Ví dụ:** <UserProfile />
- Dùng snake-case cho tên toàn bộ thư mục và file.
  **Ví dụ:** user-profile.jsx.

### 2. Varibles Naming Conventions

- Sử dụng camelCase cho biến và hàm. **Ví dụ:** userProfile, handleClick.
- Sử dụng UPPER_CASE cho hằng số. **Ví dụ:** MAX_NUMBER.
- Viết chú thích cho các component hoặc function có logic phức tạp.

### 3. Best practise

- Avoid Inline Functions in JSX

```jsx
// Thay vì viết thế này
<button onClick={() => setCount(count + 1)}>Increase</button>;

// Nên làm như sau
const handleIncrease = () => setCount(count + 1);
<button onClick={handleIncrease}>Increase</button>;
```

- Conditional Rendering

```jsx
// Thay vì viết thế này
{
  isLoggedIn ? <Dashboard /> : null;
}
```

```jsx
// Nên làm thế này
{
  isLoggedIn && <Dashboard />;
}
{
  isLoading ? <Spinner /> : <Content />;
}
```

- API URL Conventions

```jsx
// Thay vì đặt method ở cuối url
"http://localhost:5000/api/admin/products/get";
"http://localhost:5000/api/admin/products/post";
"http://localhost:5000/api/admin/products/put";
"http://localhost:5000/api/admin/products/delete";
```

```jsx
// Nên đặt url thế này rồi thay đổi method của axios
axios.get("http://localhost:5000/api/admin/products");
axios.post("http://localhost:5000/api/admin/products");
axios.put("http://localhost:5000/api/admin/products");
axios.delete("http://localhost:5000/api/admin/products");
```
