# Doubly Linked List — Insertion

Insertion means **adding a new node** to a Doubly Linked List.

A **Doubly Linked List (DLL)** is a linked list where every node contains three fields:

- **Data:** Stores the actual value.
- **Prev:** Stores the address of the previous node.
- **Next:** Stores the address of the next node.

Because of `prev` and `next`, we can move in both directions.

```text
NULL ← 10 ⇄ 20 ⇄ 30 → NULL
        ↑             ↑
       head          tail
```

---

# 1. Node Structure

Each node contains:

```text
┌─────────┬─────────┬─────────┐
│  Prev   │  Data   │  Next   │
└─────────┴─────────┴─────────┘
```

### Node Code

```cpp
class Node
{
public:

    int data;
    Node *prev;
    Node *next;

    Node(int data)
    {
        this->data = data;
        this->prev = NULL;
        this->next = NULL;
    }
};
```

---

# 2. Head and Tail

In a Doubly Linked List:

- `head` always points to the **first node**.
- `tail` always points to the **last node**.
- `head->prev` is always `NULL`.
- `tail->next` is always `NULL`.

Example:

```text
NULL ← 10 ⇄ 20 ⇄ 30 → NULL
        ↑             ↑
       head          tail
```

---

# 3. Insertion

Insertion means **adding a new node** to the Doubly Linked List.

There are 3 types of insertion:

```text
Insertion
   │
   ├── 1. At First
   ├── 2. At Last
   └── 3. In Between
```

---

# 4. Insertion at First

A new node is inserted **before the current head**.

There are 2 cases.

---

## Case 1: `head == NULL`

If there are no nodes:

```text
Before:

head → NULL
tail → NULL
```

Create a new node:

```cpp
Node *temp = new Node(data);
```

Then:

```cpp
head = temp;
tail = temp;
```

After:

```text
head
 ↓
10
 ↑
tail
```

Both `head` and `tail` point to the same node.

### Code

```cpp
if (head == NULL)
{
    head = temp;
    tail = temp;

    return;
}
```

---

## Case 2: `n > 0` Nodes

Suppose:

```text
Before:

NULL ← 10 ⇄ 20 ⇄ 30 → NULL
        ↑             ↑
       head          tail
```

Insert `25` at first.

Create:

```text
temp
 ↓
25
```

Now connect `temp` with `head`.

### Step 1

```cpp
head->prev = temp;
```

### Step 2

```cpp
temp->next = head;
```

### Step 3

```cpp
head = temp;
```

Final:

```text
NULL ← 25 ⇄ 10 ⇄ 20 ⇄ 30 → NULL
        ↑                  ↑
       head               tail
```

### Main Logic

```cpp
head->prev = temp;
temp->next = head;
head = temp;
```

---

## Code — Insertion at First

```cpp
void insertAtFirst(int value)
{
    Node *temp = new Node(value);

    // Case 1
    if (head == NULL)
    {
        head = temp;
        tail = temp;

        return;
    }

    // Case 2
    head->prev = temp;
    temp->next = head;
    head = temp;
}
```

---

# 5. Insertion at Last

A new node is inserted **after the current tail**.

There are 2 cases.

---

## Case 1: `head == NULL`

If there are no nodes:

```text
Before:

head → NULL
tail → NULL
```

Create a new node:

```cpp
Node *temp = new Node(data);
```

Then:

```cpp
head = temp;
tail = temp;
```

After:

```text
head
 ↓
10
 ↑
tail
```

### Code

```cpp
if (head == NULL)
{
    head = temp;
    tail = temp;

    return;
}
```

---

## Case 2: `n > 0` Nodes

Suppose:

```text
Before:

NULL ← 10 ⇄ 20 ⇄ 30 → NULL
        ↑             ↑
       head          tail
```

Insert `40`.

Create:

```text
temp
 ↓
40
```

### Step 1

Connect `temp` with the current tail:

```cpp
temp->prev = tail;
```

### Step 2

Connect old tail with `temp`:

```cpp
tail->next = temp;
```

### Step 3

Move tail to the new node:

```cpp
tail = temp;
```

Final:

```text
NULL ← 10 ⇄ 20 ⇄ 30 ⇄ 40 → NULL
        ↑                  ↑
       head               tail
```

### Main Logic

```cpp
temp->prev = tail;
tail->next = temp;
tail = temp;
```

---

## Code — Insertion at Last

```cpp
void insertAtLast(int data)
{
    // Create new node
    Node *temp = new Node(data);

    // Case 1
    if (head == NULL)
    {
        head = temp;
        tail = temp;

        return;
    }

    // Case 2
    temp->prev = tail;
    tail->next = temp;
    tail = temp;
}
```

---

# 6. Insertion in Between

Insertion in between means inserting a new node **between existing nodes**.

According to the notes, insertion in between can be done using:

```text
Insertion in Between
        │
        ├── Given Position of Node
        │
        └── Given Targeted Node
```

---

# 7. Insertion in Between — Given Targeted Node

Here we use a `targetValue`.

Suppose:

```text
NULL ← 10 ⇄ 20 ⇄ 30 ⇄ 40 → NULL
              ↑
          targetValue
```

We want to insert `25` after `20`.

Final:

```text
NULL ← 10 ⇄ 20 ⇄ 25 ⇄ 30 ⇄ 40 → NULL
```

---

## Case 1: List is Empty

If:

```cpp
head == NULL
```

then no nodes are available.

```text
head → NULL
tail → NULL
```

### Code

```cpp
if (head == NULL)
{
    cout << "No nodes are there" << endl;

    return;
}
```

---

## Case 2: Only One Node

Suppose:

```text
head
 ↓
10
 ↑
tail
```

If the list has one node, the new node can be connected after `head`.

```cpp
Node *temp = new Node(data);

temp->prev = head;
head->next = temp;
tail = temp;
```

Final:

```text
NULL ← 10 ⇄ 20 → NULL
        ↑       ↑
       head    tail
```

---

## Case 3: More Than One Node

Suppose:

```text
NULL ← 10 ⇄ 20 ⇄ 30 ⇄ 40 → NULL
              ↑
          targetValue
```

Create:

```cpp
Node *temp = new Node(data);
```

Find the targeted node.

```cpp
Node *temp1 = head;
```

Then traverse:

```cpp
while (temp1 != NULL && temp1->data != targetValue)
{
    temp1 = temp1->next;
}
```

---

## Target Not Found

If:

```cpp
temp1 == NULL
```

then target does not exist.

```cpp
if (temp1 == NULL)
{
    cout << "Target doesn't exist" << endl;

    return;
}
```

---

## Target Found

Suppose:

```text
NULL ← 10 ⇄ 20 ⇄ 30 ⇄ 40 → NULL
              ↑
             temp1
```

Create new node `25`.

```text
temp
 ↓
25
```

Now connect the new node.

### Step 1

```cpp
temp->next = temp1->next;
```

### Step 2

```cpp
temp->prev = temp1;
```

### Step 3

```cpp
temp1->next->prev = temp;
```

### Step 4

```cpp
temp1->next = temp;
```

Final:

```text
NULL ← 10 ⇄ 20 ⇄ 25 ⇄ 30 ⇄ 40 → NULL
              ↑     ↑
           temp1   temp
```

---

# 8. Insertion in Between — Main Logic

```cpp
temp->next = temp1->next;

temp->prev = temp1;

temp1->next->prev = temp;

temp1->next = temp;
```

These four lines maintain both `prev` and `next`.

---

# 9. Special Case — Insert at Last Using Target

If the targeted node is already the last node:

```text
NULL ← 10 ⇄ 20 ⇄ 30 → NULL
                    ↑
                  target
```

Then:

```cpp
temp->next = temp1->next;
```

will make:

```cpp
temp->next = NULL;
```

Then:

```cpp
temp->prev = temp1;
temp1->next = temp;
```

And because the new node becomes the last node:

```cpp
if (temp->next == NULL)
{
    tail = temp;
}
```

Final:

```text
NULL ← 10 ⇄ 20 ⇄ 30 ⇄ 40 → NULL
        ↑                  ↑
       head               tail
```

---

# 10. Full Code — Doubly Linked List Insertion

```cpp
#include <iostream>
using namespace std;

class Node
{
public:

    int data;
    Node *prev;
    Node *next;

    Node(int data)
    {
        this->data = data;
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


    // INSERT AT FIRST
    void insertAtFirst(int value)
    {
        Node *temp = new Node(value);

        // Case 1
        if (head == NULL)
        {
            head = temp;
            tail = temp;

            return;
        }

        // Case 2
        head->prev = temp;
        temp->next = head;
        head = temp;
    }


    // INSERT AT LAST
    void insertAtLast(int data)
    {
        // Create new node
        Node *temp = new Node(data);

        // Case 1
        if (head == NULL)
        {
            head = temp;
            tail = temp;

            return;
        }

        // Case 2
        temp->prev = tail;
        tail->next = temp;
        tail = temp;
    }


    // INSERT IN BETWEEN
    void insertInBetween(int data, int targetValue)
    {
        // Case 1
        if (head == NULL)
        {
            cout << "No nodes are there" << endl;

            return;
        }

        // Case 2
        if (head->next == NULL)
        {
            if (head->data != targetValue)
            {
                cout << "Target doesn't exist" << endl;

                return;
            }

            Node *temp = new Node(data);

            temp->prev = head;
            head->next = temp;
            tail = temp;

            return;
        }

        // Case 3
        Node *temp1 = head;

        while (temp1 != NULL &&
               temp1->data != targetValue)
        {
            temp1 = temp1->next;
        }

        if (temp1 == NULL)
        {
            cout << "Target doesn't exist" << endl;

            return;
        }

        Node *temp = new Node(data);

        temp->next = temp1->next;

        temp->prev = temp1;

        if (temp1->next != NULL)
        {
            temp1->next->prev = temp;
        }

        temp1->next = temp;

        if (temp->next == NULL)
        {
            tail = temp;
        }
    }


    // DISPLAY FORWARD
    void displayForward()
    {
        if (head == NULL)
        {
            cout << "No Nodes are there" << endl;

            return;
        }

        Node *temp = head;

        while (temp != NULL)
        {
            cout << "Current Node data is -> "
                 << temp->data << endl;

            temp = temp->next;
        }
    }


    // DISPLAY BACKWARD
    void displayBackward()
    {
        if (head == NULL)
        {
            cout << "No Nodes are there" << endl;

            return;
        }

        Node *temp = tail;

        while (temp != NULL)
        {
            cout << "Current Node data is -> "
                 << temp->data << endl;

            temp = temp->prev;
        }
    }
};


int main()
{
    DoublyLinkedList list;

    list.insertAtFirst(10);
    list.insertAtFirst(20);

    list.insertAtLast(30);

    list.insertInBetween(25, 20);

    list.displayForward();

    cout << endl;

    list.displayBackward();

    return 0;
}
```

---

# 11. Step-by-Step Example

## Insert at First

```cpp
list.insertAtFirst(10);
```

```text
NULL ← 10 → NULL
        ↑
    head/tail
```

Then:

```cpp
list.insertAtFirst(20);
```

```text
NULL ← 20 ⇄ 10 → NULL
        ↑       ↑
       head    tail
```

---

## Insert at Last

```cpp
list.insertAtLast(30);
```

```text
NULL ← 20 ⇄ 10 ⇄ 30 → NULL
        ↑             ↑
       head          tail
```

---

## Insert in Between

```cpp
list.insertInBetween(25, 20);
```

Target = `20`

New value = `25`

```text
Before:

NULL ← 20 ⇄ 10 ⇄ 30 → NULL
        ↑
      target
```

After:

```text
NULL ← 20 ⇄ 25 ⇄ 10 ⇄ 30 → NULL
        ↑                  ↑
       head               tail
```

---

# 12. Forward Display

Forward display starts from `head`.

```text
head
 ↓
20 → 25 → 10 → 30 → NULL
```

Code:

```cpp
Node *temp = head;

while (temp != NULL)
{
    cout << temp->data << " ";

    temp = temp->next;
}
```

---

# 13. Backward Display

Backward display starts from `tail`.

```text
NULL ← 20 ← 25 ← 10 ← 30
                         ↑
                        tail
```

Code:

```cpp
Node *temp = tail;

while (temp != NULL)
{
    cout << temp->data << " ";

    temp = temp->prev;
}
```

---

# 14. Important Pointer Connections

## Insert at First

```cpp
head->prev = temp;
temp->next = head;
head = temp;
```

Remember:

```text
New Node
   ↓
prev = NULL

newNode → old head
old head → newNode
```

---

## Insert at Last

```cpp
temp->prev = tail;
tail->next = temp;
tail = temp;
```

Remember:

```text
old tail ⇄ new node
             ↓
            tail
```

---

## Insert in Between

```cpp
temp->next = temp1->next;
temp->prev = temp1;
temp1->next->prev = temp;
temp1->next = temp;
```

Remember:

```text
Previous ⇄ New Node ⇄ Next
```

---

# ⭐ Exam Memory

## AT FIRST

```cpp
head->prev = temp;
temp->next = head;
head = temp;
```

```text
CHANGE HEAD
```

---

## AT LAST

```cpp
temp->prev = tail;
tail->next = temp;
tail = temp;
```

```text
CHANGE TAIL
```

---

## IN BETWEEN

```cpp
temp->next = temp1->next;
temp->prev = temp1;
temp1->next->prev = temp;
temp1->next = temp;
```

```text
CHANGE 4 LINKS
```

---

# Quick Case Revision

```text
                    INSERTION
                        │
          ┌─────────────┼─────────────┐
          │             │             │
          ▼             ▼             ▼
      AT FIRST       AT LAST      IN BETWEEN
          │             │             │
       ┌──┴──┐       ┌──┴──┐      ┌──┴───────┐
       │     │       │     │      │          │
      NULL  Nodes   NULL  Nodes  Target    Position
```

---

# Doubly Linked List Important Points

```text
head → Always points to first node

tail → Always points to last node

head->prev → Always NULL

tail->next → Always NULL
```

### Structure

```text
NULL ← [10] ⇄ [20] ⇄ [30] → NULL
        ↑                  ↑
       head               tail
```

---

# One-Line Revision

```text
AT FIRST
→ head->prev = temp
→ temp->next = head
→ head = temp
```

```text
AT LAST
→ temp->prev = tail
→ tail->next = temp
→ tail = temp
```

```text
IN BETWEEN
→ temp->next = temp1->next
→ temp->prev = temp1
→ temp1->next->prev = temp
→ temp1->next = temp
```

---

# Topic Summary

| Operation | Main Pointer Change |
|---|---|
| Insert at First | Change `head` |
| Insert at Last | Change `tail` |
| Insert in Between | Change `prev` and `next` |
| Forward Display | Use `next` |
| Backward Display | Use `prev` |

---
