# Doubly Linked List — Deletion

Deletion means **removing a node** from a Doubly Linked List.

In this PPT, deletion is covered for:

```text
Deletion
   │
   ├── 1. Delete First Node
   │
   └── 2. Delete Last Node
```

> **Note:** Deletion in between is not covered in this PPT.

---

# 1. Delete First Node

Delete First Node means removing the **first node** of the Doubly Linked List.

There are different cases depending on the number of nodes.

---

## Case 1: `head == NULL`

If `head` is `NULL`, there are no nodes in the list.

```text
head → NULL
tail → NULL
```

There is nothing to delete.

### Logic

```cpp
if (head == nullptr)
{
    cout << "No nodes are there" << endl;
    return;
}
```

---

## Case 2: Only One Node

If there is only one node:

```text
head
 ↓
┌───────────────┐
│ prev | 10 | next │
└───────────────┘
 ↑
tail
```

Here:

```cpp
head->next == nullptr
or 
head==tail
```

or:

```cpp
head == tail
```

After deleting the only node:

```text
head → NULL
tail → NULL
```

### Logic

```cpp
head = nullptr;
tail = nullptr;
```

---

## Case 3: `n > 1` Nodes

Suppose the list is:

```text
NULL ← 10 ⇄ 25 ⇄ 36 → NULL
        ↑             ↑
       head          tail
```

We want to delete the first node `10`.

### Step 1

Move `head` to the next node:

```cpp
head = head->next;
```

Now:

```text
head
 ↓
25 ⇄ 36
```

### Step 2

Set the new head's `prev` to `NULL`:

```cpp
head->prev = nullptr;
```

Final:

```text
NULL ← 25 ⇄ 36 → NULL
        ↑       ↑
       head    tail
```

### Main Logic

```cpp
head = head->next;
head->prev = nullptr;
```

---

# Delete First Node — Summary

```text
Case 1: head == NULL

No nodes are there.
```

```text
Case 2: Only 1 node

head = NULL
tail = NULL
```

```text
Case 3: n > 1 nodes

head = head->next;
head->prev = NULL;
```

---

# Delete First Node — Full Logic

```cpp
void deleteFirstNode()
{
    // Case 1
    if (head == nullptr)
    {
        cout << "No nodes are there" << endl;
        return;
    }

    // Case 2
    else if (head->next == nullptr||head==tail)
    {
        head = nullptr;
        tail = nullptr;
    }

    // Case 3
    else
    {
        head = head->next;
        head->prev = nullptr;
    }
}
```

---

# 2. Delete Last Node

Delete Last Node means removing the **last node** of the Doubly Linked List.

There are different cases depending on the number of nodes.

---

## Case 1: `head == NULL`

If:

```cpp
head == nullptr
```

then the list is empty.

```text
head → NULL
tail → NULL
```

There is nothing to delete.

### Logic

```cpp
if (head == nullptr)
{
    cout << "No nodes are there" << endl;
    return;
}
```

---

## Case 2: Only One Node

Suppose there is only one node:

```text
head
 ↓
┌───────────────┐
│prev | 10 |next│
└───────────────┘
 ↑
tail
```

Here:

```cpp
head == tail
```

After deleting the node:

```text
head → NULL
tail → NULL
```

### Logic

```cpp
head = nullptr;
tail = nullptr;
```

---

## Case 3: `n > 1` Nodes

Suppose:

```text
NULL ← 10 ⇄ 25 → NULL
        ↑       ↑
       head    tail
```

We want to delete the last node `25`.

### Step 1

Move `tail` to the previous node:

```cpp
tail = tail->prev;
```

Now:

```text
NULL ← 10 → tail
```

### Step 2

Set the new tail's `next` to `NULL`:

```cpp
tail->next = nullptr;
```

Final:

```text
NULL ← 10 → NULL
        ↑
     head/tail
```

### Main Logic

```cpp
tail = tail->prev;
tail->next = nullptr;
```

---

# Delete Last Node — Summary

```text
Case 1: head == NULL

No nodes are there.
```

```text
Case 2: Only 1 node

head = NULL
tail = NULL
```

```text
Case 3: n > 1 nodes

tail = tail->prev;
tail->next = NULL;
```

---

# Delete Last Node — Full Logic

```cpp
void deleteLastNode()
{
    // Case 1
    if (head == nullptr)
    {
        cout << "No nodes are there" << endl;
        return;
    }

    // Case 2
    else if (head->next == nullptr || head == tail)
    {
        head = nullptr;
        tail = nullptr;
    }

    // Case 3
    else
    {
        tail = tail->prev;
        tail->next = nullptr;
    }
}
```

---

# Diagrams

## Delete First — Before

```text
head
 ↓
NULL ← 10 ⇄ 25 ⇄ 36 → NULL
                       ↑
                      tail
```

Delete `10`.

## Delete First — After

```text
head
 ↓
NULL ← 25 ⇄ 36 → NULL
               ↑
              tail
```

---

# Delete Last — Before

```text
head
 ↓
NULL ← 10 ⇄ 25 ⇄ 36 → NULL
                       ↑
                      tail
```

Delete `36`.

## Delete Last — After

```text
head
 ↓
NULL ← 10 ⇄ 25 → NULL
               ↑
              tail
```

---

# Important Pointer Changes

## Delete First

For more than one node:

```cpp
head = head->next;
head->prev = nullptr;
```

Remember:

```text
Move HEAD
   ↓
Set PREV = NULL
```

---

## Delete Last

For more than one node:

```cpp
tail = tail->prev;
tail->next = nullptr;
```

Remember:

```text
Move TAIL
   ↓
Set NEXT = NULL
```

---

# ⭐ Exam Memory

## DELETE FIRST

```cpp
head = head->next;
head->prev = NULL;
```

## DELETE LAST

```cpp
tail = tail->prev;
tail->next = NULL;
```

## ONLY ONE NODE

```cpp
head = NULL;
tail = NULL;
```

## EMPTY LIST

```cpp
head == NULL
```

```text
No nodes are there.
```

---

# Quick Revision

```text
             DLL DELETION
                  │
        ┌─────────┴─────────┐
        │                   │
        ▼                   ▼
  DELETE FIRST         DELETE LAST
        │                   │
        │                   │
 head = head->next    tail = tail->prev
        │                   │
 head->prev = NULL    tail->next = NULL
```

---

# Cases to Remember

```text
DELETE FIRST
│
├── Case 1 → head == NULL
│            No nodes
│
├── Case 2 → Only 1 node
│            head = NULL
│            tail = NULL
│
└── Case 3 → n > 1 nodes
             head = head->next
             head->prev = NULL
```

```text
DELETE LAST
│
├── Case 1 → head == NULL
│            No nodes
│
├── Case 2 → Only 1 node
│            head = NULL
│            tail = NULL
│
└── Case 3 → n > 1 nodes
             tail = tail->prev
             tail->next = NULL
```

---

# One-Line Revision

```text
Delete First → Move HEAD forward + remove PREV link

Delete Last  → Move TAIL backward + remove NEXT link
```

---

