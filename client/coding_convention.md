### 1. File Naming

- Sử dụng PascalCase cho tên file chứa components.
  **Ví dụ:** UserProfile.jsx
- Các file không phải component như helpers, lib dùng camelCase.
  **Ví dụ:** dateHelper.jsx.

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
