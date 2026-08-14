# Doubly Linked List — Deletion

Deletion means **removing a node** from a Doubly Linked List.

In this notes, deletion is covered in two ways:

```text
                    DLL Deletion
                         |
              +----------+----------+
              |                     |
              v                     v
       1. Delete First       2. Delete Last
             Node                  Node
```

> **Note:** Deletion of a node in between is not covered in these notes.

---

# Doubly Linked List

A Doubly Linked List contains three fields in every node:

```text
+---------+-------+---------+
|  prev   | value |  next   |
+---------+-------+---------+
```

- `prev` → points to the previous node.
- `value` → stores the data/value.
- `next` → points to the next node.
- `head` → points to the first node.
- `tail` → points to the last node.

### Basic Structure

```text
                              head                                      tail
                               |                                         |
                               v                                         v

NULL <--- +---------+-------+---------+ <--> +---------+-------+---------+ <--> +---------+-------+---------+ ---> NULL
          |  prev   |  10   |  next   |      |  prev   |  25   |  next   |      |  prev   |  36   |  next   |
          +---------+-------+---------+      +---------+-------+---------+      +---------+-------+---------+
```

---

# 1. Delete First Node

Delete First Node means removing the **first node** of the Doubly Linked List.

There are **3 cases**:

```text
Delete First Node
       |
       +-- Case 1: head == NULL
       |
       +-- Case 2: Only 1 Node
       |
       +-- Case 3: n > 1 Nodes
```

---

## Case 1: `head == NULL`

If:

```cpp
head == NULL
```

then there are no nodes in the list.

```text
       head
        |
        v
      NULL

       tail
        |
        v
      NULL
```

There is nothing to delete.

### Logic

```cpp
if (head == NULL)
{
    cout << "No nodes are there" << endl;
    return;
}
```

---

## Case 2: Only One Node

If there is only one node:

```text
                    head / tail
                         |
                         v

                   +---------+-------+---------+
             NULL <|  prev   |  10   |  next   |> NULL
                   +---------+-------+---------+
```

Here:

```cpp
head->next == NULL
```

or:

```cpp
head == tail
```

After deleting the only node:

```text
head ---> NULL
tail ---> NULL
```

### Logic

```cpp
head = NULL;
tail = NULL;
```

---

## Case 3: `n > 1` Nodes

Suppose the list is:

```text
                              head                                      tail
                               |                                         |
                               v                                         v

NULL <--- +---------+-------+---------+ <--> +---------+-------+---------+ <--> +---------+-------+---------+ ---> NULL
          |  prev   |  10   |  next   |      |  prev   |  25   |  next   |      |  prev   |  36   |  next   |
          +---------+-------+---------+      +---------+-------+---------+      +---------+-------+---------+
```

We want to delete the first node `10`.

---

### Step 1: Move `head` to the next node

```cpp
head = head->next;
```

Now:

```text
                         head                                      tail
                          |                                         |
                          v                                         v

NULL <--- +---------+-------+---------+ <--> +---------+-------+---------+ ---> NULL
          |  prev   |  25   |  next   |      |  prev   |  36   |  next   |
          +---------+-------+---------+      +---------+-------+---------+
```

---

### Step 2: Set the new head's `prev` to `NULL`

```cpp
head->prev = NULL;
```

Final:

```text
                         head                                      tail
                          |                                         |
                          v                                         v

NULL <--- +---------+-------+---------+ <--> +---------+-------+---------+ ---> NULL
          |  prev   |  25   |  next   |      |  prev   |  36   |  next   |
          +---------+-------+---------+      +---------+-------+---------+
```

---

### Step 3: Delete the Old First Node

To delete the old first node, we can keep a temporary pointer.

```cpp
Node *temp = head;
```

However, in the deletion method below, we keep the old node through `temp` **before moving `head`**.

The complete logic is:

```cpp
Node *temp = head;

head = head->next;

head->prev = NULL;

delete temp;
```

---

# Delete First Node — Complete Logic

```cpp
void deleteFirstNode()
{
    // Case 1: Empty list
    if (head == NULL)
    {
        cout << "No nodes are there" << endl;
        return;
    }

    // Case 2: Only one node
    else if (head->next == NULL || head == tail)
    {
        delete head;

        head = NULL;
        tail = NULL;
    }

    // Case 3: n > 1 nodes
    else
    {
        Node *temp = head;

        head = head->next;

        head->prev = NULL;

        delete temp;
    }
}
```

---

# Delete First Node — Summary

### Case 1: Empty List

```cpp
head == NULL
```

```text
No nodes are there.
```

### Case 2: Only 1 Node

```cpp
delete head;

head = NULL;
tail = NULL;
```

### Case 3: `n > 1` Nodes

```cpp
Node *temp = head;

head = head->next;

head->prev = NULL;

delete temp;
```

---

# 2. Delete Last Node

Delete Last Node means removing the **last node** of the Doubly Linked List.

There are **3 cases**:

```text
Delete Last Node
       |
       +-- Case 1: head == NULL
       |
       +-- Case 2: Only 1 Node
       |
       +-- Case 3: n > 1 Nodes
```

---

## Case 1: `head == NULL`

If:

```cpp
head == NULL
```

then the list is empty.

```text
       head
        |
        v
      NULL

       tail
        |
        v
      NULL
```

There is nothing to delete.

### Logic

```cpp
if (head == NULL)
{
    cout << "No nodes are there" << endl;
    return;
}
```

---

## Case 2: Only One Node

Suppose there is only one node:

```text
                    head / tail
                         |
                         v

                   +---------+-------+---------+
             NULL <|  prev   |  10   |  next   |> NULL
                   +---------+-------+---------+
```

Here:

```cpp
head == tail
```

After deleting the node:

```text
head ---> NULL
tail ---> NULL
```

### Logic

```cpp
delete head;

head = NULL;
tail = NULL;
```

---

## Case 3: `n > 1` Nodes

Suppose the list is:

```text
                              head                                      tail
                               |                                         |
                               v                                         v

NULL <--- +---------+-------+---------+ <--> +---------+-------+---------+ <--> +---------+-------+---------+ ---> NULL
          |  prev   |  10   |  next   |      |  prev   |  25   |  next   |      |  prev   |  36   |  next   |
          +---------+-------+---------+      +---------+-------+---------+      +---------+-------+---------+
```

We want to delete the last node `36`.

---

### Step 1: Move `tail` to the previous node

```cpp
tail = tail->prev;
```

Now:

```text
                              head                            tail
                               |                               |
                               v                               v

NULL <--- +---------+-------+---------+ <--> +---------+-------+---------+ ---> NULL
          |  prev   |  10   |  next   |      |  prev   |  25   |  next   |
          +---------+-------+---------+      +---------+-------+---------+
```

---

### Step 2: Set the new tail's `next` to `NULL`

```cpp
tail->next = NULL;
```

Final:

```text
                              head                            tail
                               |                               |
                               v                               v

NULL <--- +---------+-------+---------+ <--> +---------+-------+---------+ ---> NULL
          |  prev   |  10   |  next   |      |  prev   |  25   |  next   |
          +---------+-------+---------+      +---------+-------+---------+
```

---

### Step 3: Delete the Old Last Node

Keep a temporary pointer before moving `tail`:

```cpp
Node *temp = tail;

tail = tail->prev;

tail->next = NULL;

delete temp;
```

---

# Delete Last Node — Complete Logic

```cpp
void deleteLastNode()
{
    // Case 1: Empty list
    if (head == NULL)
    {
        cout << "No nodes are there" << endl;
        return;
    }

    // Case 2: Only one node
    else if (head->next == NULL || head == tail)
    {
        delete head;

        head = NULL;
        tail = NULL;
    }

    // Case 3: n > 1 nodes
    else
    {
        Node *temp = tail;

        tail = tail->prev;

        tail->next = NULL;

        delete temp;
    }
}
```

---

# Delete Last Node — Summary

### Case 1: Empty List

```cpp
head == NULL
```

```text
No nodes are there.
```

### Case 2: Only 1 Node

```cpp
delete head;

head = NULL;
tail = NULL;
```

### Case 3: `n > 1` Nodes

```cpp
Node *temp = tail;

tail = tail->prev;

tail->next = NULL;

delete temp;
```

---

# Complete Diagrams

## Delete First Node — Before

```text
                              head                                      tail
                               |                                         |
                               v                                         v

NULL <--- +---------+-------+---------+ <--> +---------+-------+---------+ <--> +---------+-------+---------+ ---> NULL
          |  prev   |  10   |  next   |      |  prev   |  25   |  next   |      |  prev   |  36   |  next   |
          +---------+-------+---------+      +---------+-------+---------+      +---------+-------+---------+
```

Delete `10`.

---

## Delete First Node — After

```text
                              head                            tail
                               |                               |
                               v                               v

NULL <--- +---------+-------+---------+ <--> +---------+-------+---------+ ---> NULL
          |  prev   |  25   |  next   |      |  prev   |  36   |  next   |
          +---------+-------+---------+      +---------+-------+---------+
```

---

# Delete Last Node — Before

```text
                              head                                      tail
                               |                                         |
                               v                                         v

NULL <--- +---------+-------+---------+ <--> +---------+-------+---------+ <--> +---------+-------+---------+ ---> NULL
          |  prev   |  10   |  next   |      |  prev   |  25   |  next   |      |  prev   |  36   |  next   |
          +---------+-------+---------+      +---------+-------+---------+      +---------+-------+---------+
```

Delete `36`.

---

# Delete Last Node — After

```text
                              head                            tail
                               |                               |
                               v                               v

NULL <--- +---------+-------+---------+ <--> +---------+-------+---------+ ---> NULL
          |  prev   |  10   |  next   |      |  prev   |  25   |  next   |
          +---------+-------+---------+      +---------+-------+---------+
```

---

# Important Pointer Changes

## Delete First

For more than one node:

```cpp
head = head->next;
head->prev = NULL;
```

Remember:

```text
Move HEAD
    |
    v
Set PREV = NULL
```

---

## Delete Last

For more than one node:

```cpp
tail = tail->prev;
tail->next = NULL;
```

Remember:

```text
Move TAIL
    |
    v
Set NEXT = NULL
```

---

# ⭐ Exam Memory

## DELETE FIRST

```cpp
Node *temp = head;

head = head->next;

head->prev = NULL;

delete temp;
```

---

## DELETE LAST

```cpp
Node *temp = tail;

tail = tail->prev;

tail->next = NULL;

delete temp;
```

---

## ONLY ONE NODE

```cpp
delete head;

head = NULL;
tail = NULL;
```

---

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
                         |
              +----------+----------+
              |                     |
              v                     v
        DELETE FIRST          DELETE LAST
              |                     |
              v                     v
       Node *temp = head     Node *temp = tail
              |                     |
              v                     v
       head = head->next     tail = tail->prev
              |                     |
              v                     v
       head->prev = NULL     tail->next = NULL
              |                     |
              +----------+----------+
                         |
                         v
                    delete temp
```

---

# Cases to Remember

## DELETE FIRST

```text
DELETE FIRST
    |
    +-- Case 1 → head == NULL
    |            No nodes
    |
    +-- Case 2 → Only 1 node
    |            delete head
    |            head = NULL
    |            tail = NULL
    |
    +-- Case 3 → n > 1 nodes
                 temp = head
                 head = head->next
                 head->prev = NULL
                 delete temp
```

---

## DELETE LAST

```text
DELETE LAST
    |
    +-- Case 1 → head == NULL
    |            No nodes
    |
    +-- Case 2 → Only 1 node
    |            delete head
    |            head = NULL
    |            tail = NULL
    |
    +-- Case 3 → n > 1 nodes
                 temp = tail
                 tail = tail->prev
                 tail->next = NULL
                 delete temp
```

---

# One-Line Revision

```text
Delete First
→ Store old HEAD
→ Move HEAD forward
→ Set HEAD->prev = NULL
→ Delete old HEAD
```

```text
Delete Last
→ Store old TAIL
→ Move TAIL backward
→ Set TAIL->next = NULL
→ Delete old TAIL
```

```text
Only One Node
→ Delete node
→ head = NULL
→ tail = NULL
```

```text
Empty List
→ No nodes are there
```

---

# Full Code — DLL Deletion

```cpp
#include <iostream>
using namespace std;

class Node
{
public:

    int value;
    Node *prev;
    Node *next;

    Node(int value)
    {
        this->value = value;
        this->prev = NULL;
        this->next = NULL;
    }
};


class DoublyLinkedList
{
public:

    Node *head;
    Node *tail;

    DoublyLinkedList()
    {
        this->head = NULL;
        this->tail = NULL;
    }


    // DELETE FIRST NODE
    void deleteFirstNode()
    {
        // Case 1: Empty list
        if (head == NULL)
        {
            cout << "No nodes are there" << endl;
            return;
        }

        // Case 2: Only one node
        else if (head->next == NULL || head == tail)
        {
            delete head;

            head = NULL;
            tail = NULL;
        }

        // Case 3: n > 1 nodes
        else
        {
            Node *temp = head;

            head = head->next;

            head->prev = NULL;

            delete temp;
        }
    }


    // DELETE LAST NODE
    void deleteLastNode()
    {
        // Case 1: Empty list
        if (head == NULL)
        {
            cout << "No nodes are there" << endl;
            return;
        }

        // Case 2: Only one node
        else if (head->next == NULL || head == tail)
        {
            delete head;

            head = NULL;
            tail = NULL;
        }

        // Case 3: n > 1 nodes
        else
        {
            Node *temp = tail;

            tail = tail->prev;

            tail->next = NULL;

            delete temp;
        }
    }
};
```

---

# Final Revision Table

| Operation | Case | Main Logic |
|---|---|---|
| Delete First | Empty | `head == NULL` |
| Delete First | One Node | `head = NULL`, `tail = NULL` |
| Delete First | `n > 1` | `head = head->next` |
| Delete First | `n > 1` | `head->prev = NULL` |
| Delete Last | Empty | `head == NULL` |
| Delete Last | One Node | `head = NULL`, `tail = NULL` |
| Delete Last | `n > 1` | `tail = tail->prev` |
| Delete Last | `n > 1` | `tail->next = NULL` |

---

# GitHub Commit Message

```text
Add doubly linked list deletion notes and code
```
