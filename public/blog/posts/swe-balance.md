---
title: 'Time, Performance, and Correctness in Software Engineering'
date: '2023-09-06'
image: 'whatisagile.png'
attr: 'Microsoft Learn'
---

Since I've been writing software for a while now,
I've gotten accustomed to trying to build performant, reliable software in a time sensitive manner. I've also realized something - these often act in opposing directions.
Let's face it - everyone wants fast, good quality software, and they want it ASAP. That's not an indictment on any sort of expectations being imposed upon engineers.
On the contrary, it's an ideal that every engineer aspires to. But it might be one that is thought of incorrectly. What exactly am I saying here?
As a more naive & younger engineer, I'd made the mistake of trying to meet a deadline that simply put, didn't leave much in the way of balancing other
aspects of the code, like performance or correctness. Thankfully,in this particular instance, the outputs were correct.
The code was just simply not performant. And, that can be noticeable once you start seeing systems run at scale in a true production environment.

Is this to say I was a bad engineer before? I don't think so - I think this has far more to do with a common flaw that many engineers have, particularly ones who are just starting out. One that I hope to help others to avoid. In order to properly understand what I'm saying, perhaps we should define these aspects of software engineering more concretely -

**Correctness**

This is a rather straightforward one, and perhaps the most important - does the code function as intended? Is the application meeting its expected behavior?
Code correctness can range from introducing minor bugs that affect the user experience, to outright incorrect results. Obviously, having the correct behavior for core functionality is pretty non-negotiable. So instead, think of this more as ironing out the edge cases & fixing bugs.

**Performance**

This is also reasonably straightforward, but not quite as much as correctness. Can the code be written in a more performant, scalable manner?  This can quickly evolve from simply writing an O(n) algorithm instead of an O(n^2) algorithm to
outright re-evaluating pre-existing cloud infrastructure & database systems.

**Time**

I will admit, I was torn between referring to this as time or cost. The reality is, dev time is expensive. Both in a literal sense, and in the sense of opportunity cost.
There's plenty of software that can be written that adds value to a company. That being said, there is certainly an opportunity cost in an engineer working on one problem instead of another. Naturally, a company wants a dev to be able to write as much and contribute as much as they can - as they should. This is the most difficult to assess, because allocating dev resources does not scale linearly. Throwing 2 engineers at a problem, sometimes can yield results 2 times as quickly.
Sometimes, it can yield even faster results, as one engineer can see solutions to a problem blocking another, and vice versa. And sometimes, it can just drag the process down.
This is perhaps the most team/context dependent.

Now, in theory, the perfect engineer can balance all three of these without sacrificing any of them. In application, the perfect engineer doesn't exist.

In most situations, the best result is one in which you pick the balance, alongside your team & PM. 

As for some examples - let's say you work for a startup, and a new feature is needed in a project to help secure funding. The prospective investor is prepared to take their money elsewhere rather quickly - odds are, you want to build fast and maybe break stuff - ideally, stuff that can be optimized before a true production release.

On the flip side, let's say you're working for a well established company. They're known for their uptime and handle up to a million concurrent users. There's a good chance you may want to take your time developing the feature and making sure it can scale out.

One final case, and perhaps a rather rare one - you're creating an internal tool that is needed rather quickly. It will only be used by a handful of people, and needs to be optimized since it will be used to fetch large quantities of data. We do care about the correctness of the data, of course, but what about UI bugs? Odds are, if they don't prevent the users from accessing the necessary data, we probably don't care too much about the minor inconveniences they cause. This can be especially troublesome to solve if you're maintaining an old internal tool that is used for this purpose - as it can be written in deprecated versions of languages or using frameworks you're not familiar with.

All that being said, this isn't an encouragement to head to production with code that's buggy, or is so slow that it barely runs. But more succinctly, it is a reminder to think of the needs of the business when balancing correctness, scalability and  of course, time spent.
