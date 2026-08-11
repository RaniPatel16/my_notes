# Singly Linked List — Deletion

Deletion means **removing a node** from a singly linked list.

There are **3 types of deletion**:

```text
Deletion
   │
   ├── 1. At First
   ├── 2. At Last
   └── 3. In Between
```

---

## Introduction

A **Singly Linked List** is a linear data structure where each node contains two fields:

- **Data / Value:** The actual value stored in the node.
- **Next:** Pointer/reference to the next node in the list.

The last node points to `NULL`.

```text
head
 ↓
10 → 20 → 30 → NULL
```

---

# Node Structure Representation

```cpp
class Node
{
public:
    int value;
    Node *next;

    Node(int value)
    {
        this->value = value;
        this->next = NULL;
    }
};
```

### Basic Node Structure

```text
┌──────────┬──────────┐
│  Value   │   Next   │
└──────────┴──────────┘
```

Example:

```text
head
 ↓
┌──────┬──────┐     ┌──────┬──────┐     ┌──────┬──────┐
│  10  │  •───┼────→│  20  │  •───┼────→│  30  │ NULL │
└──────┴──────┘     └──────┴──────┘     └──────┴──────┘
```

---

# 1. Deletion at First

Deletion at first means **removing the first node** of the linked list.

There are **2 main cases**.

---

## Case 1: `head == NULL`

The linked list is empty.

```text
head → NULL
```

There is nothing to delete.

### Output

```text
No nodes exist
```

### Logic

```cpp
if (head == NULL)
{
    cout << "No nodes exist" << endl;
    return;
}
```

---

## Case 2: Node / Nodes Exist

Suppose:

```text
Before:

head
 ↓
10 → 20 → 30 → NULL
```

Delete the first node `10`.

First move `head` to the next node:

```cpp
head = head->next;
```

After:

```text
head
 ↓
20 → 30 → NULL
```

The first node is removed from the list.

### Main Logic

```cpp
head = head->next;
```

---

## Code — Deletion at First

```cpp
void deleteAtFirst()
{
    // Case 1: No node
    if (head == NULL)
    {
        cout << "No nodes exist" << endl;
        return;
    }

    // Case 2: Node / Nodes exist
    Node *temp = head;

    head = head->next;

    delete temp;
}
```

---

# 2. Deletion at Last

Deletion at last means **removing the last node** from the linked list.

There are **2 cases**.

---

## Case 1: `head == NULL`

The linked list is empty.

```text
head → NULL
```

Nothing can be deleted.

### Code

```cpp
if (head == NULL)
{
    cout << "No nodes exist" << endl;
    return;
}
```

---

## Case 2: `n > 0` Nodes

Suppose:

```text
Before:

head
 ↓
10 → 20 → 30 → NULL
```

We want to delete the last node `30`.

We need to reach the **second-last node**.

```text
head
 ↓
10 → 20 → 30 → NULL
      ↑
     temp
```

Now:

```text
temp->next
    ↓
30
```

Make:

```cpp
temp->next = NULL;
```

Final:

```text
head
 ↓
10 → 20 → NULL
```

---

## Special Case: Only One Node

If there is only one node:

```text
head
 ↓
10 → NULL
```

After deletion:

```text
head → NULL
```

### Check

```cpp
if (head->next == NULL)
{
    delete head;
    head = NULL;
    return;
}
```

---

## Main Logic

```cpp
while (temp->next->next != NULL)
{
    temp = temp->next;
}

delete temp->next;
temp->next = NULL;
```

---

## Code — Deletion at Last

```cpp
void deleteAtLast()
{
    // Case 1: No node
    if (head == NULL)
    {
        cout << "No nodes exist" << endl;
        return;
    }

    // Case 2: Only one node
    if (head->next == NULL)
    {
        delete head;
        head = NULL;
        return;
    }

    // More than one node
    Node *temp = head;

    while (temp->next->next != NULL)
    {
        temp = temp->next;
    }

    delete temp->next;
    temp->next = NULL;
}
```

---

# 3. Deletion in Between

Deletion in between means **deleting a targeted node** from the linked list.

There are **3 cases**.

```text
Deletion in Between
        │
        ├── Case 1: List is Empty
        ├── Case 2: Target Not Found
        └── Case 3: Target Found
```

---

## Case 1: List is Empty

```text
head → NULL
```

There is no node to delete.

### Code

```cpp
if (head == NULL)
{
    cout << "No nodes exist" << endl;
    return;
}
```

---

## Case 2: Target Not Found

Suppose:

```text
10 → 20 → 30 → NULL

Target = 50
```

`50` does not exist.

### Output

```text
Targeted node doesn't exist
```

### Code

```cpp
if (temp == NULL)
{
    cout << "Targeted node doesn't exist" << endl;
    return;
}
```

---

## Case 3: Target Found

Suppose:

```text
Before:

10 → 20 → 30 → NULL
      ↑
    target
```

Target:

```text
20
```

Delete `20`.

We need to connect `10` directly to `30`.

```text
10 ─────────→ 30 → NULL
```

Final:

```text
head
 ↓
10 → 30 → NULL
```

---

## Pointer Logic

Before:

```text
10 → 20 → 30
     ↑
   target
```

We need:

```text
10 → 30
```

The previous node must skip the targeted node.

```cpp
previous->next = temp->next;
```

Then delete the target:

```cpp
delete temp;
```

---

## Code — Deletion in Between

```cpp
void deleteInBetween(int targetedValue)
{
    // Case 1: No node
    if (head == NULL)
    {
        cout << "No nodes exist" << endl;
        return;
    }

    // If target is the first node
    if (head->value == targetedValue)
    {
        Node *temp = head;

        head = head->next;

        delete temp;
        return;
    }

    Node *temp = head;

    // Find target
    while (temp->next != NULL &&
           temp->next->value != targetedValue)
    {
        temp = temp->next;
    }

    // Case 2: Target not found
    if (temp->next == NULL)
    {
        cout << "Targeted node doesn't exist" << endl;
        return;
    }

    // Case 3: Target found
    Node *deleteNode = temp->next;

    temp->next = deleteNode->next;

    delete deleteNode;
}
```

---

# 4. Display / Traversal

After deletion, we can display the linked list.

```text
head
 ↓
10 → 20 → 30 → NULL
```

### Code

```cpp
void display()
{
    if (head == NULL)
    {
        cout << "No nodes exist" << endl;
        return;
    }

    Node *temp = head;

    while (temp != NULL)
    {
        cout << temp->value << " ";
        temp = temp->next;
    }

    cout << endl;
}
```

---

# Full Code — Singly Linked List Deletion

```cpp
#include <iostream>
using namespace std;

class Node
{
public:
    int value;
    Node *next;

    Node(int value)
    {
        this->value = value;
        this->next = NULL;
    }
};

class SinglyLinkedList
{
private:
    Node *head;

public:

    SinglyLinkedList()
    {
        this->head = NULL;
    }


    // 1. DELETION AT FIRST
    void deleteAtFirst()
    {
        // Case 1: No node
        if (head == NULL)
        {
            cout << "No nodes exist" << endl;
            return;
        }

        // Case 2: Node / Nodes exist
        Node *temp = head;

        head = head->next;

        delete temp;
    }


    // 2. DELETION AT LAST
    void deleteAtLast()
    {
        // Case 1: No node
        if (head == NULL)
        {
            cout << "No nodes exist" << endl;
            return;
        }

        // Case 2: Only one node
        if (head->next == NULL)
        {
            delete head;
            head = NULL;
            return;
        }

        // More than one node
        Node *temp = head;

        while (temp->next->next != NULL)
        {
            temp = temp->next;
        }

        delete temp->next;
        temp->next = NULL;
    }


    // 3. DELETION IN BETWEEN
    void deleteInBetween(int targetedValue)
    {
        // Case 1: No node
        if (head == NULL)
        {
            cout << "No nodes exist" << endl;
            return;
        }

        // If target is the first node
        if (head->value == targetedValue)
        {
            Node *temp = head;

            head = head->next;

            delete temp;
            return;
        }

        Node *temp = head;

        // Find target
        while (temp->next != NULL &&
               temp->next->value != targetedValue)
        {
            temp = temp->next;
        }

        // Case 2: Target not found
        if (temp->next == NULL)
        {
            cout << "Targeted node doesn't exist" << endl;
            return;
        }

        // Case 3: Target found
        Node *deleteNode = temp->next;

        temp->next = deleteNode->next;

        delete deleteNode;
    }


    // DISPLAY
    void display()
    {
        if (head == NULL)
        {
            cout << "No nodes exist" << endl;
            return;
        }

        Node *temp = head;

        while (temp != NULL)
        {
            cout << temp->value << " ";
            temp = temp->next;
        }

        cout << endl;
    }
};


int main()
{
    SinglyLinkedList obj;

    obj.insertAtFirst(10);
    obj.insertAtFirst(20);
    obj.insertAtFirst(30);

    obj.deleteAtFirst();

    obj.deleteAtLast();

    obj.deleteInBetween(20);

    obj.display();

    return 0;
}
```

---

# ⚠️ Important: Full Code Above Needs Insertion Functions

If you want to use the `main()` exactly as shown above, your class also needs the insertion functions from your previous `insertion.md`.

So for a **deletion-only file**, use this `main()` instead:

```cpp
int main()
{
    SinglyLinkedList obj;

    obj.deleteAtFirst();
    obj.deleteAtLast();
    obj.deleteInBetween(20);

    obj.display();

    return 0;
}
```

But for actual testing, you should keep the **same insertion functions from your previous code** and then add these deletion functions to the same class.

---

# ⭐ Exam Memory

## DELETE AT FIRST

```text
Move head to next node.

head = head->next;
```

Remember:

```text
Delete First → Change HEAD
```

---

## DELETE AT LAST

```text
Find second-last node.

temp->next->next == NULL

Then:

delete temp->next;
temp->next = NULL;
```

Remember:

```text
Delete Last → Find SECOND-LAST
```

---

## DELETE IN BETWEEN

```text
Find target.

previous->next = target->next;
delete target;
```

Remember:

```text
Delete Between → SKIP TARGET
```

---

# Quick Case Revision

```text
                    DELETION
                        │
          ┌─────────────┼─────────────┐
          │             │             │
          ▼             ▼             ▼
      AT FIRST       AT LAST      IN BETWEEN
          │             │             │
       ┌──┴──┐       ┌──┴──┐      ┌──┼────────┐
       │     │       │     │      │  │        │
      NULL  Nodes   NULL  1 Node  Empty  Target Not Found
                           │                 │
                           └── n > 1       Target Found
```

---

# Important Pointer Operations

### Delete at First

```cpp
head = head->next;
```

### Delete at Last

```cpp
temp->next = NULL;
```

### Delete in Between

```cpp
temp->next = deleteNode->next;
delete deleteNode;
```

---

# One-Line Revision

```text
AT FIRST    → Change HEAD
AT LAST     → Find SECOND-LAST
IN BETWEEN  → SKIP TARGET
```

---

# Topic Summary

| Operation | What We Do |
|---|---|
| Delete at First | Move `head` to the next node |
| Delete at Last | Find second-last node and remove last |
| Delete in Between | Skip the targeted node |
| Display | Traverse from `head` to `NULL` |

---

# File Structure

```text
DSA
└── Linked List
    └── Singly Linked List
        ├── Insertion
        │   └── insertion.md
        │
        └── Deletion
            └── deletion.md
```

---

# Commit Message

```text
Add singly linked list deletion notes and code
```