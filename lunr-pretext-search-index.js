var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  https:\/\/math.ksu.edu\/~gdkerr\/   copyright  "
},
{
  "id": "sec-limit",
  "level": "1",
  "url": "sec-limit.html",
  "type": "Section",
  "number": "1.1",
  "title": "The limit",
  "body": " The limit  In this section, we will review limits of vector valued functions of many variables   Of course, we can and should be more general than this. We should consider a vector of an inner product space in an open set and really work there. The reason for all of this additional notation is that sometimes our function may only be defined near a given point. Indeed, the limit and derivative are local features of a function meaning they do not care about what is going on far away from the point of focus.  To understand the definition of the limit, one must work through definitions and results in a basic analysis course. As this is not in the main body of the notes, we will review a few of the important features and discuss examples in this section.     linear approximation    Let and be two inner product spaces and a neighborhood of . Suppose is any function. We say that the limit of as approaches is if for every there is a so that implies In this case, we write    An alternative way of stating the implication is that every point in the punctured ball of radius around is sent to the ball of radius around or, with notation, Invariably, with the notion of limit comes its cousin.     continuous    Let and be two inner product spaces and a neighborhood of . Suppose is any function. We say that is continuous at if    The definition given here for limits allows us to talk about limits for non-linear functions between inner product spaces. It is interesting to consider what exactly has become new or challenging compared to our one-dimensional understanding. In fact, there are several results that have much the same look in higher dimensions. The case where this is most obvious is scalar functions. Recall these are functions defined on an open subset of an inner product space to (where is or ). In notation we would write . The reason that scalar functions are such important creatures is that we can add, multiply and divide them as well as compose them with some familiar functions from to .    Suppose is an open set in , a scalar in , is a continuous function at , and are scalar functions such that Then   ,     if ,         We also need the following base case result.    A linear scalar function on a finite dimensional inner product space is continuous.    Let be an inner product space over and a linear function. Let and its orthogonal complement. There are two cases for . First, could be the zero function in which case it is easy to see that it is continuous (why?). Otherwise, restricting to is a non-zero linear function on a one-dimensional space. Thus, choosing a unit vector in (and therefore a basis), we have Now, given any , let and suppose Then we can use projections, the unique decomposition of vectors in and the Cauchy-Schwarz Inequality to see    The point of the last proposition is that we can use it, along with to compute many continuous scalar functions.   Building continuous function I   If is a quadratic form on , then we know it can be written as a sum By , each of the coordinate functions are continuous. But then so is as it is a linear combination of products of such functions.     Building continuous function II    tells us that the functions and are continuous functions from to . This may seem trivial, but using our arithmetic theorems and knowledge of continuous functions on like and , we can build many continuous functions. For example, we have that is a continuous function on all of as it is an arithmetic combination of well defined compositions of continuous functions.    The limit of a vector valued function can be found by the limits of its scalar coordinate functions (if they exist), so we will restrict our attention to scalar functions As a large scale goal, we would like to know when exists and how to calculate it for a given point . Now, if is continuous, then we can simply put in and move along. However, just as in one variable calculus, the most interesting examples are when is undefined at . In these cases, we have the usual one variable issues of what can go wrong, but with the massively more complicated context of being in higher dimensions.   Issue 1 - Divergence   If we consider the function and the limit , we all know that this limit does not exist ... or we've been informed that the limit is . Either is fine, what is important is that the phenomenon is clear : as tends to , the value of the function will pass any finite bound. Similar situations occur in functions of many variables as well. For example, also tends to infinity as approaches . In these situations, it will be acceptable to say that the limit does not exist (although it is fine if you wish to be nuanced and say it is ).     Issue 2 - Oscillation   Another strange thing that can happen with functions is that they jump around a good amount near the limiting point. For example, oscillates more and more as you approach . Here, there is no getting around the limit not existing and we write DNE with great confidence. Of course, similar oscillation can occur in higher dimensions, simply throw your favorite function into the one above. For example, will lead to     Issue 3 - Left limit not equal to right limit   Here, the universe breaks. In fact, this is where, if we think about it enough, we start to appreciate how easy life was in one variable calculus. Let's recall that we can define functions like the Heavyside function  Then our one sided limits are We conclude that the limit does not exist because it should indeed be the same value.  In higher dimensions, how do we phrase this? Indeed, in one dimension for any given point there is a left and a right approach and that is all. However, in higher dimensions there are an infinite number of approaches... and even more than you think! Let's look at an example to see this. Let Then in fact does not exist. We could check this by approaching the origin in various directions. For example, we could approach along the -axis and see But then we could approach along the diagonal line and see Since these two limits are not equal, we can conclude that the limit does not exist. As a rule of thumb, if you consider a rational function where the degree of the homogeneous numerator equals that of the homogeneous denominator, you should expect to find this behavior.    The last example is one that should be considered with great care. Unlike in dimension, it is not the case that one can assert that a limit does exist if all straight line limits exist and are equal.   Non-existent limit with well defined limits along straight lines I   Consider the function One can easily check that for any real numbers and . However, does not exist. Indeed, this shows that straight line approaches are not enough, one must also consider parabolic approaches, and of course, an infinite set of other approaches!     Non-existent limit with well defined limits along straight lines II   The last example may make it seem that only very exotic looking functions experience this defect. To see how common such a scenario may be, consider the function which is continuous everywhere except at the origin where it is undefined. We again consider the limit of as one approaches . One could try to examine the limit of along any line through the origin (the case of can be evaluated separately). Here we have which, if converges to . The case of gives which converges to as well. It may than seem that the limit of as is zero. After all, we have approached the origin in every linear direction and found the same limit of . However, the limit in fact does not exist ! Indeed, if we approach the origin along the parabola, we see so that the limit is on this approach. This phenomena shows that, while taking different linear approaches may show that a limit does not exist, it cannot show that a limit does exist.    This last example may leave the student a bit concerned about how in the world they will prove that certain limits exist. Such a concern is indeed warranted as there are fewer tools in many variables (for example, L'Hopital's rule does not exist in many variables). However, there is a higher dimensional Squeeze Theorem that comes in handy which is proven in the appendix.   Squeeze Theorem   Suppose is an open neighborhood of in an inner product space and is a scalar valued function. If and are functions for which and Then      Squeeze Theorem Application   The function is continuous everywhere except at the origin where it is undefined. We can nonetheless consider the limit of as one approaches . To see this limit exists, we first observe that satisfies the inequalities To see this, just use polar coordinates and observe that Now, the function is the composition of continuous functions, so it is continuous and thus the left and right hand bound have limit as . But then the Squeeze Theorem gives that     When considering examples of pathological behavior for limits in two dimensions, it is often useful to use polar coordinates. In other words, to consider functions and contemplate For example, it would be simple to observe that does not have a limit at the origin, but does have limits along any lines. Converting this to Cartesian coordinates, use the double angle formula to get This can be illustrated using Sage.     Show that a polynomial viewed as a complex function from to itself is continuous.   Find the limits of the following functions if they exist. If they do not exist, explain why.   as .    as .    as .    as where is a non-zero quadratic form on a finite dimensional inner product space.   Let be a basis for the real inner product space .  Let be the matrix with -entry . Show that the quadratic form is positive definite (recall this means that with equality if and only if .)   Use the Spectral Theorem to show that there are positive real constants and for which    Using the definition of limit, prove that the linear transformations and are continuous functions.    "
},
{
  "id": "def-limit",
  "level": "2",
  "url": "sec-limit.html#def-limit",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "   linear approximation    Let and be two inner product spaces and a neighborhood of . Suppose is any function. We say that the limit of as approaches is if for every there is a so that implies In this case, we write   "
},
{
  "id": "def-continuous",
  "level": "2",
  "url": "sec-limit.html#def-continuous",
  "type": "Definition",
  "number": "1.1.2",
  "title": "",
  "body": "   continuous    Let and be two inner product spaces and a neighborhood of . Suppose is any function. We say that is continuous at if   "
},
{
  "id": "prop-limitsScalarArithmetic",
  "level": "2",
  "url": "sec-limit.html#prop-limitsScalarArithmetic",
  "type": "Proposition",
  "number": "1.1.3",
  "title": "",
  "body": "  Suppose is an open set in , a scalar in , is a continuous function at , and are scalar functions such that Then   ,     if ,        "
},
{
  "id": "prop-continuousdual",
  "level": "2",
  "url": "sec-limit.html#prop-continuousdual",
  "type": "Proposition",
  "number": "1.1.4",
  "title": "",
  "body": "  A linear scalar function on a finite dimensional inner product space is continuous.    Let be an inner product space over and a linear function. Let and its orthogonal complement. There are two cases for . First, could be the zero function in which case it is easy to see that it is continuous (why?). Otherwise, restricting to is a non-zero linear function on a one-dimensional space. Thus, choosing a unit vector in (and therefore a basis), we have Now, given any , let and suppose Then we can use projections, the unique decomposition of vectors in and the Cauchy-Schwarz Inequality to see   "
},
{
  "id": "sec-limit-14",
  "level": "2",
  "url": "sec-limit.html#sec-limit-14",
  "type": "Example",
  "number": "1.1.5",
  "title": "Building continuous function I.",
  "body": " Building continuous function I   If is a quadratic form on , then we know it can be written as a sum By , each of the coordinate functions are continuous. But then so is as it is a linear combination of products of such functions.   "
},
{
  "id": "sec-limit-15",
  "level": "2",
  "url": "sec-limit.html#sec-limit-15",
  "type": "Example",
  "number": "1.1.6",
  "title": "Building continuous function II.",
  "body": " Building continuous function II    tells us that the functions and are continuous functions from to . This may seem trivial, but using our arithmetic theorems and knowledge of continuous functions on like and , we can build many continuous functions. For example, we have that is a continuous function on all of as it is an arithmetic combination of well defined compositions of continuous functions.   "
},
{
  "id": "sec-limit-17",
  "level": "2",
  "url": "sec-limit.html#sec-limit-17",
  "type": "Example",
  "number": "1.1.7",
  "title": "Issue 1 - Divergence.",
  "body": " Issue 1 - Divergence   If we consider the function and the limit , we all know that this limit does not exist ... or we've been informed that the limit is . Either is fine, what is important is that the phenomenon is clear : as tends to , the value of the function will pass any finite bound. Similar situations occur in functions of many variables as well. For example, also tends to infinity as approaches . In these situations, it will be acceptable to say that the limit does not exist (although it is fine if you wish to be nuanced and say it is ).   "
},
{
  "id": "sec-limit-18",
  "level": "2",
  "url": "sec-limit.html#sec-limit-18",
  "type": "Example",
  "number": "1.1.8",
  "title": "Issue 2 - Oscillation.",
  "body": " Issue 2 - Oscillation   Another strange thing that can happen with functions is that they jump around a good amount near the limiting point. For example, oscillates more and more as you approach . Here, there is no getting around the limit not existing and we write DNE with great confidence. Of course, similar oscillation can occur in higher dimensions, simply throw your favorite function into the one above. For example, will lead to   "
},
{
  "id": "sec-limit-19",
  "level": "2",
  "url": "sec-limit.html#sec-limit-19",
  "type": "Example",
  "number": "1.1.9",
  "title": "Issue 3 - Left limit not equal to right limit.",
  "body": " Issue 3 - Left limit not equal to right limit   Here, the universe breaks. In fact, this is where, if we think about it enough, we start to appreciate how easy life was in one variable calculus. Let's recall that we can define functions like the Heavyside function  Then our one sided limits are We conclude that the limit does not exist because it should indeed be the same value.  In higher dimensions, how do we phrase this? Indeed, in one dimension for any given point there is a left and a right approach and that is all. However, in higher dimensions there are an infinite number of approaches... and even more than you think! Let's look at an example to see this. Let Then in fact does not exist. We could check this by approaching the origin in various directions. For example, we could approach along the -axis and see But then we could approach along the diagonal line and see Since these two limits are not equal, we can conclude that the limit does not exist. As a rule of thumb, if you consider a rational function where the degree of the homogeneous numerator equals that of the homogeneous denominator, you should expect to find this behavior.   "
},
{
  "id": "sec-limit-21",
  "level": "2",
  "url": "sec-limit.html#sec-limit-21",
  "type": "Example",
  "number": "1.1.10",
  "title": "Non-existent limit with well defined limits along straight lines I.",
  "body": " Non-existent limit with well defined limits along straight lines I   Consider the function One can easily check that for any real numbers and . However, does not exist. Indeed, this shows that straight line approaches are not enough, one must also consider parabolic approaches, and of course, an infinite set of other approaches!   "
},
{
  "id": "sec-limit-22",
  "level": "2",
  "url": "sec-limit.html#sec-limit-22",
  "type": "Example",
  "number": "1.1.11",
  "title": "Non-existent limit with well defined limits along straight lines II.",
  "body": " Non-existent limit with well defined limits along straight lines II   The last example may make it seem that only very exotic looking functions experience this defect. To see how common such a scenario may be, consider the function which is continuous everywhere except at the origin where it is undefined. We again consider the limit of as one approaches . One could try to examine the limit of along any line through the origin (the case of can be evaluated separately). Here we have which, if converges to . The case of gives which converges to as well. It may than seem that the limit of as is zero. After all, we have approached the origin in every linear direction and found the same limit of . However, the limit in fact does not exist ! Indeed, if we approach the origin along the parabola, we see so that the limit is on this approach. This phenomena shows that, while taking different linear approaches may show that a limit does not exist, it cannot show that a limit does exist.   "
},
{
  "id": "thm-squeeze",
  "level": "2",
  "url": "sec-limit.html#thm-squeeze",
  "type": "Theorem",
  "number": "1.1.12",
  "title": "Squeeze Theorem.",
  "body": " Squeeze Theorem   Suppose is an open neighborhood of in an inner product space and is a scalar valued function. If and are functions for which and Then    "
},
{
  "id": "sec-limit-25",
  "level": "2",
  "url": "sec-limit.html#sec-limit-25",
  "type": "Example",
  "number": "1.1.13",
  "title": "Squeeze Theorem Application.",
  "body": " Squeeze Theorem Application   The function is continuous everywhere except at the origin where it is undefined. We can nonetheless consider the limit of as one approaches . To see this limit exists, we first observe that satisfies the inequalities To see this, just use polar coordinates and observe that Now, the function is the composition of continuous functions, so it is continuous and thus the left and right hand bound have limit as . But then the Squeeze Theorem gives that    "
},
{
  "id": "exe-limit-1",
  "level": "2",
  "url": "sec-limit.html#exe-limit-1",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": " Show that a polynomial viewed as a complex function from to itself is continuous.  "
},
{
  "id": "exe-limit-2",
  "level": "2",
  "url": "sec-limit.html#exe-limit-2",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "",
  "body": "Find the limits of the following functions if they exist. If they do not exist, explain why.   as .    as .    as .    as where is a non-zero quadratic form on a finite dimensional inner product space.  "
},
{
  "id": "exe-limit-3",
  "level": "2",
  "url": "sec-limit.html#exe-limit-3",
  "type": "Exercise",
  "number": "1.1.3",
  "title": "",
  "body": "Let be a basis for the real inner product space .  Let be the matrix with -entry . Show that the quadratic form is positive definite (recall this means that with equality if and only if .)   Use the Spectral Theorem to show that there are positive real constants and for which    Using the definition of limit, prove that the linear transformations and are continuous functions.  "
},
{
  "id": "sec-derivative",
  "level": "1",
  "url": "sec-derivative.html",
  "type": "Section",
  "number": "1.2",
  "title": "The derivative",
  "body": " The derivative   In this section, we will define the derivative of a vector valued function of many variables for an open set . We do not delay and present the definition in the abstract setting of inner product spaces.     Derivative    Let and be inner product spaces and suppose is a function defined in a neighborhood of . The derivative  of at is a linear transformation from to for which If exists we say that is differentiable at  .    This definition certainly needs some unpacking, but it is indeed quite beautiful in its simplicity. Before getting into this, let us mention a few points. First, the derivative is sometimes called the `total derivative' or 'differential' of , but the term derivative is used in the literature as well (see, for example, Spivak's \"Calculus on Manifolds\"). There are also alternative notations for the derivative like or . As we will use these notations for directional derivatives later on, we will stick with the above for the derivative.  Now, the main point to draw the student's attention to on first exposure to the derivative is what it is! In fact, it is directly tied to the notion of a linear approximation. We can see this by considering the limit and noticing that for close to , we have Here is the `error' in the approximation. Subtracting then gives where the approximation is up to first order (which means dividing by and taking limits gives equality). Indeed, the definition gives us the following fact.    If is differentiable at , then it is continuous at .    Suppose is given and gives us the limit in the definition of the derivative for . Since linear transformations are continuous, we also have that there is some for which implies . Then letting we have that for any the triangle inequality gives Using our definition of limit, this gives us the result.    Now, while this definition is important abstractly and useful to prove the basic properties of the derivative, it is not immediately helpful for computations. To compute we will consider a less abstract setting for the moment, replacing with a Euclidean space and with the real line , i.e. we will consider scalar functions.    Directional and partial derivatives  The existence of the derivative of a function (even a scalar one) can be a delicate issue, but there are large classes of functions where existence can be easily checked. To make such a check, we need partial derivatives which in fact are certain types of directional derivatives.     directional derivative    Let be an open subset of a real inner product space and be a scalar function. For a vector of , the directional derivative of at along is if it exists. We write when regarding the directional derivative as a function of .    We note that some texts only consider directional derivatives when is a unit vector. The idea of a directional derivative is given in its name. It measures the rate of change of as one moves in the direction at unit speed. Before computing, let us list a few properties.    If are scalar functions on , a real number, and is a vector in , then   ,   ,   .      The proof of this proposition is straightforward and follows from the properties of the one variable derivative. To see that finding directional derivatives is a straightforward computation, let us check a basic example.   Directional derivative   Let and . Then Had we not chosen to evaluate at , we can view the directional derivative as a function of . Indeed, Note that when taking the derivative, both and are viewed as constants.    By far the most popular examples of directional derivatives are partial derivatives.     partial derivative    Let be an open subset of and be the scalar function . For , the -th partial derivative of at is where is the -th standard basis vector.    When we have variables or , we use them instead of in our notation. Alternative notation for partial derivatives abound. For example, we can write Also, in the case where the variable is , one sometimes sees the notation for . Note the very important fact that a partial derivative of a scalar function is not the derivative of a function. Indeed, partial derivatives may exist and yet a function may not even be differentiable (as we will observe shortly). While partial derivatives are as easy to compute (even easier) as directional derivatives, it is useful to practice a few to become familiar with them.   Partial derivative I   Let us compute partial derivatives of The key point to keep in mind as you take partial derivatives is to keep all variables constant except the one you are deriving. So and Notice that one needs to apply the chain rule while treating the other variables as constants.     Partial Derivative II   Let's try partial derivatives of Here we compute     We can also consider higher partial derivatives by repeating. These can be written by naturally extending the notation. For example, the second derivative is obtained by taking the partial of with respect to and then taking the partial of that with respect to . This is also written .   Partial Derivative III   In the prior example of we can compute the second partial derivatives     Notice that . This is a symptom of a more general fact as the following Theorem proves.   Clairaut's Theorem   If has continuous second partial derivatives in a neighborhood of then     We prove this for as the more general case follows the same outline with more notation. Note that, equals Now, consider the function defined on . This function is differentiable so we can apply the Mean Value Theorem and find between and such that . Noting that , writing this out we have that equals Thus The last equality here follows from the continuity of the second derivatives and the fact that .    Clairaut's Theorem is extremely useful in minimizing the number of higher partial derivatives one needs to take.    Derivatives of scalar functions  Now that we have the computational tool of partial derivatives in hand, we can ask whether a scalar function is differentiable. In fact, this can often readily be checked using the following theorem.    Suppose is a scalar function on an open subset of . If has continuous first partial derivatives then is differentiable. Furthermore, in this case    We will assume is a neighborhood of and is in . Let . Write Then The summands in this final expression are of the form Now, by the Mean Value Theorem, for each such there exists a between and with or Thus Write for the conjectured derivative of at . Then the numerator of equation is Now, as tends to , the values must tend towards zero (since are tending to zero) and so are . By the continuity of the first partials, we then have and moreover But dividing by simply normalizes it. So taking to be we have Thus, a quick application of the Squeeze Theorem gives which by definition implies and proves the theorem.   It is hard to overstate how beneficial this theorem is for us. This is for two main reasons (and possibly several more). First, we can proceed confidently and easily with computing derivatives of scalar (and soon general) vector valued functions. Second, we have bridged the gap between an abstract definition that is useful for general results (e.g. chain rule and change of variable formulas) and a concrete method which gives us the ability to check whether a given function satisfies the conditions for said result. However, we issue a stern warning that the continuity assumption in this theorem must be satisfied in order for it to hold. As you will see in , there are examples for which relaxing this assumption results in a non-differentiable function.  As one final comment, we should remind the student that one of the themes of this course is to understand basis free mathematics. An astute student will see that the definition of the derivative did not make mention of a basis, even implicitly. It was for a function on an inner product space and involved limits and natural transformations (not on and matrices). However, required that we work in and the reason was that it consulted partial derivatives which are defined relative to a given coordinate system! Now, one could just as easily have written this Theorem replacing continuous partial derivatives with directional derivatives along a basis of vectors, but this would certainly over complicate the statement. The point here is that to connect with computation, a basis is key and very useful - but we must keep in mind that in general it is a choice and will allow us to represent our structures numerically. In particular, in truth the derivative of a function is a linear transformation, not a matrix (although this is rarely pointed out in a first year multivariable calculus course!).    Linear approximation of scalar functions  As we have just seen in , one can often check for differentiability of a scalar function by looking at the first partial derivatives. This leads us to the following unfortunate definition.     linear approximation    Given a function on a neighborhood of a point and differentiable at , the linear approximation of at is the function  The graph of will be called the embedded tangent space of the graph of .   Now, while this vocabulary makes me mildly nauseous, it is completely standard and I cannot in good conscience avoid it. My nausea results from the fact that the linear approximation is \\textit{not} a linear function. Rather it is what is known as an affine function which is quite close (the sum of a vector and a linear function). Indeed, it would be much better to use the term `first order approximation', but sadly this is less popular. None the less, we can make several notes about this approximation. First, the graph of ought to give us the `linear' subspace of which is tangent to the graph of at the point . We use the term embedded tangent space to distinguish from a more intrinsic notion of tangent space given later on. Let us see this in an example.   Linear approximation of scalar function I   Suppose and we want to find the tangent plane to the graph of at . For this, we can compute the partials of to see Evaluating them at gives So we have an explicit form for our derivative (writing the vector in row form) Thus the linear approximation to at is precisely As the graph of (which has equation ) is the equation for the tangent plane, we obtain or as the equation for the tangent plane.    Another application of linear approximations is to compute approximations of functions near known values.   Linear approximation of scalar function II   Suppose we wish to compute . To do this, we consider the function and it's linear approximation at . We compute to see that Evaluating them at gives so that the linear approximation is Evaluating gives and we conclude that In fact, the value is closer to , but this approximation is definitely a step up from the first guess of .      The Jacobian matrix  The following theorem's proof can be found in a standard analysis book, but quite easily follows from .    Let and a function which in coordinates is given by If the partial derivatives are defined and continuous in then is differentiable and The matrix on the right is called the Jacobian matrix of .    is unfortunately rarely provided in a multivariable calculus course, but gives us a concrete computational way to find derivatives of the most general types of vector valued functions. We will use the Jacobian matrix frequently, as it plays quite nicely with many important theorems and techniques. For now, we will be satisfied with the fact that we can compute derivatives and give a couple examples.   Jacobian of a linear transformation   If is an matrix with entries and is obtained by multiplication of a column vector on the left by , then one can see that Thus the -th coordinate function of is and the partial derivative is These are all constant functions and thus continuous implying that is differentiable. Furthermore, the Jacobian matrix in this case is just itself and we see that . This is saying that the derivative of a linear transformation is constant and equals that linear transformation... which makes sense if you ask what is the linear approximation to a linear function? .     Jacobian of a function of a complex variable   Consider the function given by . If we identify with and with , this function can be written Taking partials gives These equations (without the middle terms) are known as the Cauchy-Riemann equations and tell us that is what is known as a holomorphic function. Regardless, we can see that in fact all partial derivatives are continuous everywhere so is differentiable with Jacobian matrix Finally, note that multiplication by this matrix is the same as complex multiplication by (having identified with ). This can be rephrased in complex analysis as saying that the derivative of is .       For the case when , , explain why is the same as the usual definition of the derivative.    The function denotes the altitude of a point on a map given in Cartesian coordinates. If you are at the point moving at unit speed in the north east direction, calculate the rate at which your altitude is changing.    The function denotes the temperature at a point in three space. If you are at the point moving at unit speed towards , calculate the rate at which the temperature is changing.    Let and compute the directional derivative for    Let be a vector in the inner product space with pairing and some other vector. What is where ? (Express your answer without choosing a basis.)   Compute the following partial derivatives.   and for .    and for .    for .   Consider the function and define to equal .  Show that is continuous at .   Show that and are both well defined everywhere (in particular they are well defined at ).   Prove that is not differentiable at .  This example shows that the existence of partial derivatives is not sufficient for a function to be differentiable.   Find the linear approximation for the function and and estimate the value .    Consider the change of coordinates from polar to Cartesian. This is given by the function Compute the Jacobian matrix of .    Consider the change of coordinates from spherical to Cartesian. This is given by the function Compute the Jacobian matrix of .    "
},
{
  "id": "def-derivative",
  "level": "2",
  "url": "sec-derivative.html#def-derivative",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "   Derivative    Let and be inner product spaces and suppose is a function defined in a neighborhood of . The derivative  of at is a linear transformation from to for which If exists we say that is differentiable at  .   "
},
{
  "id": "prop-diffcont",
  "level": "2",
  "url": "sec-derivative.html#prop-diffcont",
  "type": "Proposition",
  "number": "1.2.2",
  "title": "",
  "body": "  If is differentiable at , then it is continuous at .    Suppose is given and gives us the limit in the definition of the derivative for . Since linear transformations are continuous, we also have that there is some for which implies . Then letting we have that for any the triangle inequality gives Using our definition of limit, this gives us the result.   "
},
{
  "id": "def-directional-derivative",
  "level": "2",
  "url": "sec-derivative.html#def-directional-derivative",
  "type": "Definition",
  "number": "1.2.3",
  "title": "",
  "body": "   directional derivative    Let be an open subset of a real inner product space and be a scalar function. For a vector of , the directional derivative of at along is if it exists. We write when regarding the directional derivative as a function of .   "
},
{
  "id": "subsec-directional-derivative-5",
  "level": "2",
  "url": "sec-derivative.html#subsec-directional-derivative-5",
  "type": "Proposition",
  "number": "1.2.4",
  "title": "",
  "body": "  If are scalar functions on , a real number, and is a vector in , then   ,   ,   .     "
},
{
  "id": "subsec-directional-derivative-7",
  "level": "2",
  "url": "sec-derivative.html#subsec-directional-derivative-7",
  "type": "Example",
  "number": "1.2.5",
  "title": "Directional derivative.",
  "body": " Directional derivative   Let and . Then Had we not chosen to evaluate at , we can view the directional derivative as a function of . Indeed, Note that when taking the derivative, both and are viewed as constants.   "
},
{
  "id": "def-partial-derivative",
  "level": "2",
  "url": "sec-derivative.html#def-partial-derivative",
  "type": "Definition",
  "number": "1.2.6",
  "title": "",
  "body": "   partial derivative    Let be an open subset of and be the scalar function . For , the -th partial derivative of at is where is the -th standard basis vector.   "
},
{
  "id": "subsec-directional-derivative-11",
  "level": "2",
  "url": "sec-derivative.html#subsec-directional-derivative-11",
  "type": "Example",
  "number": "1.2.7",
  "title": "Partial derivative I.",
  "body": " Partial derivative I   Let us compute partial derivatives of The key point to keep in mind as you take partial derivatives is to keep all variables constant except the one you are deriving. So and Notice that one needs to apply the chain rule while treating the other variables as constants.   "
},
{
  "id": "subsec-directional-derivative-12",
  "level": "2",
  "url": "sec-derivative.html#subsec-directional-derivative-12",
  "type": "Example",
  "number": "1.2.8",
  "title": "Partial Derivative II.",
  "body": " Partial Derivative II   Let's try partial derivatives of Here we compute    "
},
{
  "id": "subsec-directional-derivative-14",
  "level": "2",
  "url": "sec-derivative.html#subsec-directional-derivative-14",
  "type": "Example",
  "number": "1.2.9",
  "title": "Partial Derivative III.",
  "body": " Partial Derivative III   In the prior example of we can compute the second partial derivatives    "
},
{
  "id": "thm-Clairaut",
  "level": "2",
  "url": "sec-derivative.html#thm-Clairaut",
  "type": "Theorem",
  "number": "1.2.10",
  "title": "Clairaut’s Theorem.",
  "body": " Clairaut's Theorem   If has continuous second partial derivatives in a neighborhood of then     We prove this for as the more general case follows the same outline with more notation. Note that, equals Now, consider the function defined on . This function is differentiable so we can apply the Mean Value Theorem and find between and such that . Noting that , writing this out we have that equals Thus The last equality here follows from the continuity of the second derivatives and the fact that .   "
},
{
  "id": "thm-differentiable",
  "level": "2",
  "url": "sec-derivative.html#thm-differentiable",
  "type": "Theorem",
  "number": "1.2.11",
  "title": "",
  "body": "  Suppose is a scalar function on an open subset of . If has continuous first partial derivatives then is differentiable. Furthermore, in this case    We will assume is a neighborhood of and is in . Let . Write Then The summands in this final expression are of the form Now, by the Mean Value Theorem, for each such there exists a between and with or Thus Write for the conjectured derivative of at . Then the numerator of equation is Now, as tends to , the values must tend towards zero (since are tending to zero) and so are . By the continuity of the first partials, we then have and moreover But dividing by simply normalizes it. So taking to be we have Thus, a quick application of the Squeeze Theorem gives which by definition implies and proves the theorem.  "
},
{
  "id": "def-linear-approximation",
  "level": "2",
  "url": "sec-derivative.html#def-linear-approximation",
  "type": "Definition",
  "number": "1.2.12",
  "title": "",
  "body": "   linear approximation    Given a function on a neighborhood of a point and differentiable at , the linear approximation of at is the function  The graph of will be called the embedded tangent space of the graph of .  "
},
{
  "id": "subsec-linear-approximation-scalar-5",
  "level": "2",
  "url": "sec-derivative.html#subsec-linear-approximation-scalar-5",
  "type": "Example",
  "number": "1.2.13",
  "title": "Linear approximation of scalar function I.",
  "body": " Linear approximation of scalar function I   Suppose and we want to find the tangent plane to the graph of at . For this, we can compute the partials of to see Evaluating them at gives So we have an explicit form for our derivative (writing the vector in row form) Thus the linear approximation to at is precisely As the graph of (which has equation ) is the equation for the tangent plane, we obtain or as the equation for the tangent plane.   "
},
{
  "id": "subsec-linear-approximation-scalar-7",
  "level": "2",
  "url": "sec-derivative.html#subsec-linear-approximation-scalar-7",
  "type": "Example",
  "number": "1.2.14",
  "title": "Linear approximation of scalar function II.",
  "body": " Linear approximation of scalar function II   Suppose we wish to compute . To do this, we consider the function and it's linear approximation at . We compute to see that Evaluating them at gives so that the linear approximation is Evaluating gives and we conclude that In fact, the value is closer to , but this approximation is definitely a step up from the first guess of .   "
},
{
  "id": "thm-Jacobianmatrix",
  "level": "2",
  "url": "sec-derivative.html#thm-Jacobianmatrix",
  "type": "Theorem",
  "number": "1.2.15",
  "title": "",
  "body": "  Let and a function which in coordinates is given by If the partial derivatives are defined and continuous in then is differentiable and The matrix on the right is called the Jacobian matrix of .   "
},
{
  "id": "subsec-Jacobian-5",
  "level": "2",
  "url": "sec-derivative.html#subsec-Jacobian-5",
  "type": "Example",
  "number": "1.2.16",
  "title": "Jacobian of a linear transformation.",
  "body": " Jacobian of a linear transformation   If is an matrix with entries and is obtained by multiplication of a column vector on the left by , then one can see that Thus the -th coordinate function of is and the partial derivative is These are all constant functions and thus continuous implying that is differentiable. Furthermore, the Jacobian matrix in this case is just itself and we see that . This is saying that the derivative of a linear transformation is constant and equals that linear transformation... which makes sense if you ask what is the linear approximation to a linear function? .   "
},
{
  "id": "subsec-Jacobian-6",
  "level": "2",
  "url": "sec-derivative.html#subsec-Jacobian-6",
  "type": "Example",
  "number": "1.2.17",
  "title": "Jacobian of a function of a complex variable.",
  "body": " Jacobian of a function of a complex variable   Consider the function given by . If we identify with and with , this function can be written Taking partials gives These equations (without the middle terms) are known as the Cauchy-Riemann equations and tell us that is what is known as a holomorphic function. Regardless, we can see that in fact all partial derivatives are continuous everywhere so is differentiable with Jacobian matrix Finally, note that multiplication by this matrix is the same as complex multiplication by (having identified with ). This can be rephrased in complex analysis as saying that the derivative of is .   "
},
{
  "id": "exe-derivative-1",
  "level": "2",
  "url": "sec-derivative.html#exe-derivative-1",
  "type": "Exercise",
  "number": "1.2.5.1",
  "title": "",
  "body": " For the case when , , explain why is the same as the usual definition of the derivative.  "
},
{
  "id": "exe-derivative-2",
  "level": "2",
  "url": "sec-derivative.html#exe-derivative-2",
  "type": "Exercise",
  "number": "1.2.5.2",
  "title": "",
  "body": " The function denotes the altitude of a point on a map given in Cartesian coordinates. If you are at the point moving at unit speed in the north east direction, calculate the rate at which your altitude is changing.  "
},
{
  "id": "exe-derivative-3",
  "level": "2",
  "url": "sec-derivative.html#exe-derivative-3",
  "type": "Exercise",
  "number": "1.2.5.3",
  "title": "",
  "body": " The function denotes the temperature at a point in three space. If you are at the point moving at unit speed towards , calculate the rate at which the temperature is changing.  "
},
{
  "id": "exe-derivative-4",
  "level": "2",
  "url": "sec-derivative.html#exe-derivative-4",
  "type": "Exercise",
  "number": "1.2.5.4",
  "title": "",
  "body": " Let and compute the directional derivative for  "
},
{
  "id": "exe-derivative-5",
  "level": "2",
  "url": "sec-derivative.html#exe-derivative-5",
  "type": "Exercise",
  "number": "1.2.5.5",
  "title": "",
  "body": " Let be a vector in the inner product space with pairing and some other vector. What is where ? (Express your answer without choosing a basis.)  "
},
{
  "id": "exe-derivative-6",
  "level": "2",
  "url": "sec-derivative.html#exe-derivative-6",
  "type": "Exercise",
  "number": "1.2.5.6",
  "title": "",
  "body": "Compute the following partial derivatives.   and for .    and for .    for .  "
},
{
  "id": "exercise-notdiff",
  "level": "2",
  "url": "sec-derivative.html#exercise-notdiff",
  "type": "Exercise",
  "number": "1.2.5.7",
  "title": "",
  "body": "Consider the function and define to equal .  Show that is continuous at .   Show that and are both well defined everywhere (in particular they are well defined at ).   Prove that is not differentiable at .  This example shows that the existence of partial derivatives is not sufficient for a function to be differentiable. "
},
{
  "id": "exe-derivative-8",
  "level": "2",
  "url": "sec-derivative.html#exe-derivative-8",
  "type": "Exercise",
  "number": "1.2.5.8",
  "title": "",
  "body": " Find the linear approximation for the function and and estimate the value .  "
},
{
  "id": "exercise-polarjacobian",
  "level": "2",
  "url": "sec-derivative.html#exercise-polarjacobian",
  "type": "Exercise",
  "number": "1.2.5.9",
  "title": "",
  "body": " Consider the change of coordinates from polar to Cartesian. This is given by the function Compute the Jacobian matrix of .  "
},
{
  "id": "exe-derivative-10",
  "level": "2",
  "url": "sec-derivative.html#exe-derivative-10",
  "type": "Exercise",
  "number": "1.2.5.10",
  "title": "",
  "body": " Consider the change of coordinates from spherical to Cartesian. This is given by the function Compute the Jacobian matrix of .  "
},
{
  "id": "sec-chainrule",
  "level": "1",
  "url": "sec-chainrule.html",
  "type": "Section",
  "number": "1.3",
  "title": "The chain rule and tangent spaces",
  "body": " The chain rule and tangent spaces   One of the most important ways one can manipulate a function is by composing it with another function. Indeed, one example of this is changing coordinates from one system to another and we will examine such coordinate systems as we progress. To see how derivatives are effected by this change, we first state some basic lemmas.    If is differentiable at then there is a neighborhood of and a constant such that for all in .   This follows from the definition of the derivative, the triangle inequality and continuity of linear transformations.      Vanish to higher order    Let be an open neighborhood of in an inner product space and some other inner product space. We say that a function  vanishes higher than first order at if       Suppose and are neighborhoods of and in inner product spaces and and is differentiable at with . If vanishes higher than first order at then vanishes higher than first order at .    By definition, for any there is a so that if then . Using the continuity of and we have that there is a and, in a neighborhood of (which maps to an appropriate neighborhood of ), Taking for gives the result.    With these preliminary lemmas in hand, we state the following amazing result.   Chain Rule   Let and be finite dimensional real inner product spaces and open sets in and respectively. Suppose are functions for which   ,   is differentiable at ,   is differentiable at .  Then is differentiable at and     We will use and the definition of the vanishing of higher than first order errors. However, the proof is fairly basic up to this result as we now observe. The error terms and vanish higher than first order at and by the definition of the derivative. These are the terms in the equations Putting these together gives Now, the function vanishes to higher order since is a linear transformation so that By , the function also vanishes higher than first order. By the definition of the derivative, this gives the result.    A student that has never understood the chain rule in -variable should now see it for what it is : the derivative of a composition is the composition of the derivatives. Of course, to understand this, one must be careful to evaluate these derivative at the correct points (in particular, one must evaluate the derivative of at the image point .) We now will progress in two ways, an abstract and a computational (with a geometric understanding at the end to tie these together).    Computational considerations  While our presentation of the chain rule is by far the better way of understanding it, it is rarely given in these terms as most students are not required to understand linear algebra before taking multivariable calculus. Instead, most students learn a few of the basic versions of the chain rule.  Let us take the case when is a path and is a scalar valued function. Then the derivatives can be computed as Jacobian matrices which are and Composing these and applying the chain rule gives   Chain rule computation I   Suppose we parameterize the unit circle as usual with and let . One may ask how is changing relative to the parameter . This of course is given by the derivative Note that here we used instead of . This is common practice when we view a given variable (like ) as a dependent parameter.    The chain rule is often used if one is changing coordinates. In other words, if gives another coordinate system on a region in the plane and is a scalar function, we may want to compute the change of relative to the variables and instead of and . For this, we simply write out the Jacobian matrix of which is and compose with the Jacobian of . This gives two formulas (one for each matrix entry of the derivative of the composition    Chain rule computation II   One often wants to consider a function on the plane as a function of the polar coordinates . This in fact is a composition. Indeed, when we write what we mean is the composition where changes from cartesian to polar coordinates. I.e. In , you computed the Jacobian matrix of and should have found that Using chain rule, this then gives us that       Tangent spaces  To define the tangent space of a vector space at a point, we first consider the following result concerning directional derivatives.    If is an open neighborhood of in and is differentiable at then for any vector in , In particular, for     Let us reconsider the definition of the directional derivative The right hand side is really the usual derivative at of the composition where is the function from to parameterizing a line through of constant velocity . Using the chain rule then gives But is a linear transformation so the second statement follows.    Now we proceed to define the tangent space of a point in a real inner product space . If it helps, you may think of as or even as to build intuition. Recall that is the vector space of all differentiable (real scalar valued) functions on a set .     Tangent space    A tangent vector  to is a directional derivative operator which is defined by for some vector in . Here is any open set containing . The vector space of these operators is denoted and called the tangent space of at .    When , we take for the tangent vectors . This forms a basis for as implies.  This definition may look rather strange to a student seeing it for the first time, after all, why not just say that is and make the tangent space ? Indeed, we have the following simple result.    For any in an inner product space , there is a linear isomorphism    Define by taking to . By this is a linear transformation and by the definition of it is an isomorphism.    While and are linearly isomorphic, there are many reasons to make its own vector space. Perhaps the most important one is that it replaces the ambient space with a new (linearly isomorphic) space `centered' at . This gives every tangent vector its own identity and its own space in which to perform arithmetic and operations, thereby divining the spatial structure at from some other point. Indeed, there is a bit more to the sophisticated definition in that it should be independent of which open set we choose around . Point being, tangent vectors of only care about what is happening very close to the point .  Alternative viewpoints to the tangent space help in understanding it. One way is to see it as the space of differentiable paths through where two paths are identified if their tangent vectors are the same. The isomorphism can then be given by taking a path to where .  Let us now recast a few definitions.     Vector field    A vector field is a function which takes a point and defines a vector in .       Derivative as linear transformation of tangent space    If is differentiable at in with , the derivative of at is the linear transformation which is defined as    These new definitions can replace our previous ones, or can live (slightly uncomfortably) along side them. However, in the latter case we will find our old viewpoints to be less conceptually workable as we advance our understanding. We may also use the new definition of the derivative as a linear transformation of tangent spaces to define tangent spaces of parameterized subspaces.     Tangent space of at    Suppose are finite dimensional real inner product spaces, is an open subset and is a differentiable, one to one function with .  The tangent space of at q is the linear subspace  The embedded tangent space of at q is the subspace     To digest this last definition, consider the case of the graph of a one variable function . As mentioned above, since is a path, the derivative of at is To write this as a linear transformation of tangent spaces, give each tangent space a basis. At we have that is a basis of the one dimensional and at we have the basis . Then the expression above is the matrix representing the linear transformation so that The image of this linear transformation then is all multiples of the vector so that or as column vectors Note that this is a linear subspace of . The embedded tangent space is not typically a linear subspace and is a subspace of the codomain of the function, not . This is just the line or in Cartesian coordinates Of course, this is just the usual tangent line to the graph of the function parameterized by and can be seen to be the set of points satisfying the usual familiar implicit equation     Level sets and their tangent spaces  When working with a set of variables, one often has additional constraints that come into play. For example, one might have some function on three variables, where is the kinetic energy of a particle, is its mass and its velocity. As we all learn in middle school physics, these three variables satisfy an equation So our function is really only interesting on the points satisfying this equation (or constraint). As it turns out, this constraint defines a surface in three dimensional space and we may wish to find its two dimensional tangent space at a given point. To do this, we consider the function Recall that the zero level set (or level surface in this case) of is the subspace satisfying . If the point lies on , we wish to find the tangent vectors in which are tangent to . To do this, we consider any given differentiable path which passes through at . The tangent (or velocity) vector to such paths at should give all of the tangent vectors to . But if we apply the chain rule to this argument, then we can see that all such tangent vectors satisfy the condition For our running example, we can compute for the equation yields which is an equation for a plane in the three dimensional .  In fact, it is a result of the Implicit Function Theorem that, if is not zero, then this equation defines the tangent space to at . Let us take this as an unproven theorem.   Implicit Function Theorem Consequence   Let be an open set in , and the level set of all points with for some fixed . If is differentiable at and then the tangent space to at as a subspace of is    This theorem may appear too abstract, so let us do a computation to show its simplicity.   Tangent space of a quadric   Consider the quadric defined by the equation and take a point on . The subspace is a surface in three dimensions, but it is not the graph of a single function (meaning it is not the set of points satisfying for some function ), so our previous method for finding the tangent plane to cannot be used. Nevertheless, we can see that the constraint can be written as where . The derivative of is the matrix and at our point this gives So the defining equation for the tangent space is simply or where the vector represents . Note that if we want to view this plane as a plane in and not simply , we have to translate the origin to so that , and . This then gives the tangent plane to at as a subspace of as or      Verify the chain rule for the following pairs of functions.  Let and be the functions    Let and be the functions     The Inverse Function Theorem for many variables says that if is differentiable at and is an invertible linear transformation, then there is a neighborhood of such that is a neighborhood of , and a function which is inverse to the function . Prove that if this is the case, then    Many vector fields in common use come from coordinate systems. For example, the polar coordinates give us vector fields on which are simply the images of and after applying the derivative to them (i.e. and ).  Express these vector fields in Cartesian coordinates.   Express the normalized vector fields and .   Show that are in fact an orthonormal basis for every tangent space in except the origin (such a pair is called an orthonormal frame).     Using the chain rule, explain why equation holds.   Find the tangent space of the level surface as a subspace of and then as a subspace of for the following functions.   the level surface at .    the level surface at .    the unit sphere at .     Find the tangent plane of the torus in which is given by the pair of constraints at the point . Here the coordinates of are .    "
},
{
  "id": "lem-slopebound",
  "level": "2",
  "url": "sec-chainrule.html#lem-slopebound",
  "type": "Lemma",
  "number": "1.3.1",
  "title": "",
  "body": "  If is differentiable at then there is a neighborhood of and a constant such that for all in .   This follows from the definition of the derivative, the triangle inequality and continuity of linear transformations.  "
},
{
  "id": "def-vanishing-higher-order",
  "level": "2",
  "url": "sec-chainrule.html#def-vanishing-higher-order",
  "type": "Definition",
  "number": "1.3.2",
  "title": "",
  "body": "   Vanish to higher order    Let be an open neighborhood of in an inner product space and some other inner product space. We say that a function  vanishes higher than first order at if    "
},
{
  "id": "lem-vanishing",
  "level": "2",
  "url": "sec-chainrule.html#lem-vanishing",
  "type": "Lemma",
  "number": "1.3.3",
  "title": "",
  "body": "  Suppose and are neighborhoods of and in inner product spaces and and is differentiable at with . If vanishes higher than first order at then vanishes higher than first order at .    By definition, for any there is a so that if then . Using the continuity of and we have that there is a and, in a neighborhood of (which maps to an appropriate neighborhood of ), Taking for gives the result.   "
},
{
  "id": "thm-chainrule",
  "level": "2",
  "url": "sec-chainrule.html#thm-chainrule",
  "type": "Theorem",
  "number": "1.3.4",
  "title": "Chain Rule.",
  "body": " Chain Rule   Let and be finite dimensional real inner product spaces and open sets in and respectively. Suppose are functions for which   ,   is differentiable at ,   is differentiable at .  Then is differentiable at and     We will use and the definition of the vanishing of higher than first order errors. However, the proof is fairly basic up to this result as we now observe. The error terms and vanish higher than first order at and by the definition of the derivative. These are the terms in the equations Putting these together gives Now, the function vanishes to higher order since is a linear transformation so that By , the function also vanishes higher than first order. By the definition of the derivative, this gives the result.   "
},
{
  "id": "subsec-computational-4",
  "level": "2",
  "url": "sec-chainrule.html#subsec-computational-4",
  "type": "Example",
  "number": "1.3.5",
  "title": "Chain rule computation I.",
  "body": " Chain rule computation I   Suppose we parameterize the unit circle as usual with and let . One may ask how is changing relative to the parameter . This of course is given by the derivative Note that here we used instead of . This is common practice when we view a given variable (like ) as a dependent parameter.   "
},
{
  "id": "subsec-computational-6",
  "level": "2",
  "url": "sec-chainrule.html#subsec-computational-6",
  "type": "Example",
  "number": "1.3.6",
  "title": "Chain rule computation II.",
  "body": " Chain rule computation II   One often wants to consider a function on the plane as a function of the polar coordinates . This in fact is a composition. Indeed, when we write what we mean is the composition where changes from cartesian to polar coordinates. I.e. In , you computed the Jacobian matrix of and should have found that Using chain rule, this then gives us that    "
},
{
  "id": "cor-directional",
  "level": "2",
  "url": "sec-chainrule.html#cor-directional",
  "type": "Corollary",
  "number": "1.3.7",
  "title": "",
  "body": "  If is an open neighborhood of in and is differentiable at then for any vector in , In particular, for     Let us reconsider the definition of the directional derivative The right hand side is really the usual derivative at of the composition where is the function from to parameterizing a line through of constant velocity . Using the chain rule then gives But is a linear transformation so the second statement follows.   "
},
{
  "id": "def-tangentspace",
  "level": "2",
  "url": "sec-chainrule.html#def-tangentspace",
  "type": "Definition",
  "number": "1.3.8",
  "title": "",
  "body": "   Tangent space    A tangent vector  to is a directional derivative operator which is defined by for some vector in . Here is any open set containing . The vector space of these operators is denoted and called the tangent space of at .   "
},
{
  "id": "prop-tangentisomorphism",
  "level": "2",
  "url": "sec-chainrule.html#prop-tangentisomorphism",
  "type": "Proposition",
  "number": "1.3.9",
  "title": "",
  "body": "  For any in an inner product space , there is a linear isomorphism    Define by taking to . By this is a linear transformation and by the definition of it is an isomorphism.   "
},
{
  "id": "def-vector-field",
  "level": "2",
  "url": "sec-chainrule.html#def-vector-field",
  "type": "Definition",
  "number": "1.3.10",
  "title": "",
  "body": "   Vector field    A vector field is a function which takes a point and defines a vector in .   "
},
{
  "id": "def-derivative2",
  "level": "2",
  "url": "sec-chainrule.html#def-derivative2",
  "type": "Definition",
  "number": "1.3.11",
  "title": "",
  "body": "   Derivative as linear transformation of tangent space    If is differentiable at in with , the derivative of at is the linear transformation which is defined as   "
},
{
  "id": "def-parametrized-tangent",
  "level": "2",
  "url": "sec-chainrule.html#def-parametrized-tangent",
  "type": "Definition",
  "number": "1.3.12",
  "title": "",
  "body": "   Tangent space of at    Suppose are finite dimensional real inner product spaces, is an open subset and is a differentiable, one to one function with .  The tangent space of at q is the linear subspace  The embedded tangent space of at q is the subspace    "
},
{
  "id": "thm-tangentspace",
  "level": "2",
  "url": "sec-chainrule.html#thm-tangentspace",
  "type": "Theorem",
  "number": "1.3.13",
  "title": "Implicit Function Theorem Consequence.",
  "body": " Implicit Function Theorem Consequence   Let be an open set in , and the level set of all points with for some fixed . If is differentiable at and then the tangent space to at as a subspace of is   "
},
{
  "id": "subsec-subspaces-6",
  "level": "2",
  "url": "sec-chainrule.html#subsec-subspaces-6",
  "type": "Example",
  "number": "1.3.14",
  "title": "Tangent space of a quadric.",
  "body": " Tangent space of a quadric   Consider the quadric defined by the equation and take a point on . The subspace is a surface in three dimensions, but it is not the graph of a single function (meaning it is not the set of points satisfying for some function ), so our previous method for finding the tangent plane to cannot be used. Nevertheless, we can see that the constraint can be written as where . The derivative of is the matrix and at our point this gives So the defining equation for the tangent space is simply or where the vector represents . Note that if we want to view this plane as a plane in and not simply , we have to translate the origin to so that , and . This then gives the tangent plane to at as a subspace of as or   "
},
{
  "id": "exe-chainrule-1",
  "level": "2",
  "url": "sec-chainrule.html#exe-chainrule-1",
  "type": "Exercise",
  "number": "1.3.4.1",
  "title": "",
  "body": "Verify the chain rule for the following pairs of functions.  Let and be the functions    Let and be the functions   "
},
{
  "id": "exe-chainrule-2",
  "level": "2",
  "url": "sec-chainrule.html#exe-chainrule-2",
  "type": "Exercise",
  "number": "1.3.4.2",
  "title": "",
  "body": " The Inverse Function Theorem for many variables says that if is differentiable at and is an invertible linear transformation, then there is a neighborhood of such that is a neighborhood of , and a function which is inverse to the function . Prove that if this is the case, then   "
},
{
  "id": "exe-chainrule-3",
  "level": "2",
  "url": "sec-chainrule.html#exe-chainrule-3",
  "type": "Exercise",
  "number": "1.3.4.3",
  "title": "",
  "body": "Many vector fields in common use come from coordinate systems. For example, the polar coordinates give us vector fields on which are simply the images of and after applying the derivative to them (i.e. and ).  Express these vector fields in Cartesian coordinates.   Express the normalized vector fields and .   Show that are in fact an orthonormal basis for every tangent space in except the origin (such a pair is called an orthonormal frame).   "
},
{
  "id": "exe-chainrule-4",
  "level": "2",
  "url": "sec-chainrule.html#exe-chainrule-4",
  "type": "Exercise",
  "number": "1.3.4.4",
  "title": "",
  "body": " Using the chain rule, explain why equation holds.  "
},
{
  "id": "exe-chainrule-5",
  "level": "2",
  "url": "sec-chainrule.html#exe-chainrule-5",
  "type": "Exercise",
  "number": "1.3.4.5",
  "title": "",
  "body": "Find the tangent space of the level surface as a subspace of and then as a subspace of for the following functions.   the level surface at .    the level surface at .    the unit sphere at .   "
},
{
  "id": "exe-chainrule-6",
  "level": "2",
  "url": "sec-chainrule.html#exe-chainrule-6",
  "type": "Exercise",
  "number": "1.3.4.6",
  "title": "",
  "body": " Find the tangent plane of the torus in which is given by the pair of constraints at the point . Here the coordinates of are .  "
},
{
  "id": "sec-gradient",
  "level": "1",
  "url": "sec-gradient.html",
  "type": "Section",
  "number": "1.4",
  "title": "The gradient",
  "body": " The gradient   There is a vast untold conspiracy to misinform all students of multivariable calculus that the gradient is the same thing as the derivative. We state here that the key difference is that the derivative at is a dual vector of the tangent space while the gradient is a vector in the tangent space . To see how to define and connect these concepts, we need to briefly discuss charts and metrics.    Metric geometry  It happens to be the case that often we wish to give each tangent space its own inner product . The case we will work in most frequently will be when is Euclidean space (sometimes called flat space). Here we have the standard basis of partial derivatives which we take to be orthonormal. This means that if we write our tangent vectors as row (or column) vectors, the inner product is just the dot product. This is by far and away the most common situation and is the only situation in which many multivariable calculus texts consider.  Nonetheless, there are several instances in which we will want to allow the pairing to depend on and we will motivate this now, returning to it later when we discuss line and surface integrals. One of the main objects of study in multivariable calculus is a subspace of defined by several constraints. Central to working with such a subspace is being able to define a parameterization where is an open subset of . The advantage of parameterizations is that they give us concrete coordinates which we can identify with points on our subspace . However, the geometry of will not generally be reflected in these coordinates without adding some bells and whistles.  As we saw in the prior section, if is a point of , the tangent space can be parameterized by taking the derivative of the parameterization where . Plainly, we observe that the derivative of a parameterization is a tangent space parameterization . This is very helpful because then we can write out tangent vectors of in terms of those in (which comes with the standard basis ). However, one realizes quickly that for many nonlinear subspaces , there is no parametrization (even near ) for which preserves lengths and angles. I.e., in general The non-existence of such a parameterization can be seen by something called curvature , but we will leave this subject to future study. For now, we mention only that the map will preserve distance if and only if the above inequality is an equality (this will be justified when we consider line integrals later).   Circle parametrization   Consider the circle of radius centered at the origin and take the usual parameterization where . If we take the derivative, we get Now, the norm is (here we identify a tangent vector with the vector for which it is the directional derivative) while the norm of can be calculated to be . This is because the parametrization is scaling the length of the interval by .     Metrics of graphs   One class of examples of parameterized surfaces comes from considering graphs of functions. For example, if is a differentiable function on the plane then we can take its graph Such a subspace is, in a sense, already parameterized as we can define via Taking the derivative gives Thus if we look at the tangent vectors we see that their dot product is This is generally non-zero, even though . This is again because the image tangent vectors fail to be orthogonal.    With these examples in mind, it may seem to be a hopeless task to recover the geometry of using the coordinates given by a parameterization. However, there is a way to do this, we just need to introduce a new inner product for every tangent space of our domain . We define this inner product as follows.     Induced inner product    Let be an open subset of and a parameterization so that for any in with the tangent space is given by . The inner product on induced by is defined by    It is not hard to verify that is bilinear, symmetric, and positive definite, so we can indeed say that has been promoted to an inner product space. Since the derivative will vary as we vary , the pairing will vary too. But in any case, this pairing can be written as a matrix of functions on . Indeed, we have the following proposition whose proof is left as an exercise.    Let be an open subset of and a parameterization. Then, if is in and are column vectors representing tangent vectors in , the inner product induced by at is    Note that the matrix we obtain is in fact symmetric as one would expect from the symmetric property of an inner product.   Metric for spherical coordinates   The world is not flat, but spherical coordinates gives us a flat domain on which to chart the world. Indeed, fixing the variable we may parameterize the unit sphere , which consists of all satisfying the constraint equation , using This is a function from a rectangle in the plane to the sphere (and is a parametrization on the interior of ) The horizontal lines in the rectangle go to latitudes and the vertical lines to longitudes. We compute the Jacobian matrix of to be which, by , gives us our tangent space inner products (represented as matrices) via This is a special situation to be in! Indeed, this tells us that, while the parametrization does not preserve lengths (it scales one by ), it still keeps the axes orthogonal. One can see this intuitively by noticing that latitude and longitude lines are still perpendicular where they meet.  One other point which we can observe through geometric intuition about this parameterization is that the surface area of the sphere (relative to the coordinates) certainly changes. We all learn at some point, for example, that Greenland is not larger than South America, even though it may appear so on some maps. The point is that on our map coordinates, we should scale area by and so, near the poles where and , we must scale down area quite a bit.    Having motivated the need for a varying inner product on a domain in , let us give the formal definition so we may use it as notation.     Riemannian metric    A domain in is said to have a Riemannian metric (or simply metric ) if there is a differentiable assignment of points in to inner products on their tangent space.    We will leave details of differentiable assignment to later courses, just noting that this means the inner products, when written as matrices, should have entries that are differentiable functions of the coordinates in .    Steepest ascent  We now arrive at our our featured definition.     Gradient    Let be an open subset of a vector space with metric , and a differentiable scalar function. The gradient of at is the tangent vector for which The gradient of is the vector field with tangent vector at .    One thing to note about this definition is that, although the right hand side of equation is written as a number, it is really the tangent vector in . We will engage in the common practice of identifying with when in one dimension. Let us make this definition concrete in the case of with the dot product.    If is an open subset of Euclidean space and is a differentiable function on then Alternatively, using the basis , one commonly writes this as the row vector    Exercise.    The gradient is among the most important vector fields that one may consider. Before seeing why this is the case, let us compute a few examples.   Gradient computation I   Consider and observe that tells us that     Gradient computation II   Take and compute    The observant student may be shaking their head a bit at this point and asking how this is different from the derivative . After all, these computations look identical! The answer to this question is that the derivative of a scalar function is a cotangent vector field and the gradient is a tangent vector field. So while the computations look (and are) nearly identical, the gradient is a different kind of mathematical entity than the derivative.  To see the difference even more clearly, we consider a function on but with a metric that is not Euclidean. Let and consider to be the graph of . We take the function and restrict it to . This gives the function Now, it is easy enough to use to and find that, were we on a Euclidean space, However, the domain of the function is identified with , so we should first consider the metric given by the matrix in . The general form for this was given in . If we take to parameterize the graph, we can compute the matrix for the inner product as Since the new inner product is obtained by the dot product with , we obtain the actual gradient by multiplying by the inverse of to find We can picture both vector fields, the Euclidean in red and actual in blue, using the sage cell Observe that away from the interior region of the interval on the x-axis, the two vector fields start looking quite different. This difference shows the importance of using the correct metric.  In either the Euclidean or varying metric case, the gradient exhibits a very important property. To explain this, we first need a notion of steepest ascent.     Steepest ascent    Suppose is a domain in with metric and is a differentiable scalar function at . The direction of steepest ascent of at is the unit tangent vector for which is maximized. I.e. for any other unit tangent vector , . Similarly, the direction of steepest descent of at is the unit tangent vector for which is minimized.    To understand this definition, recall that tangent vectors are just directional derivatives. So the value is the same as the directional derivative and we think of as the arrow starting at . If you think of a topographical map, you can consider a vector starting at a point on the map to give the steepest ascent if, were you actual at that location and started moving in that direction, you would have the steepest climb ahead of you.    Suppose is a domain in with metric and is a differentiable scalar function. If is not zero, then its normalization is the direction of steepest ascent of at . The negative of its normalization is the direction of steepest descent.    Let be any unit tangent vector. By we have By the definition of the gradient this also gives Finally, as we are in a real inner product space (and the assumption that is a unit vector) we have where is the angle between and . Now is maximized when and minimized when . These values correspond to when is in the direction of and in the opposite direction respectively.    A slightly weaker statement, but perhaps as important, is the following result.    Suppose is a domain in with metric and is a differentiable scalar function. If is non-zero, there is a positive and a differentiable path with such that is strictly increasing.    Let us identify with the vector for which . Define to be the straight line parameterized through as Then the chain rule gives At , we have so that the derivative is which is positive. But since , and are continuous, this means that is positive for all in a small neighborhood around . Taking to be a small value for which this is true, we have that is a differentiable function with positive derivative and thus is strictly increasing.    A more refined version of is to perform what is known as gradient flow. For this, we mean to solve the ordinary differential equation which is called the gradient flow equation . Finding a solution to this equation would give a path for which, at every point on the path, the direction you are travelling is increasing the function maximally. If you imagine as giving the height of a mountain on a topographical map, the solution would give a path of steepest ascent.    Let be the closed half-disc and consider the function given by  Find the matrix representing the inner product on induced by ?   Is a conformal map? Here we mean if are tangent vectors with Euclidean dot product, is the angle between them the same as the angle between their image vectors (also with the dot product). Explain your response.   Does preserve distance? Here we mean if is a tangent vector with Euclidean dot product, is its length the same as the length of its image vector (also with the dot product).    Let be a differentiable function and the induced parameterization of its graph. Show that preserves distance if and only if is a constant function.   For a connected smooth curve with endpoints and in , there is always an interval unique path for which , and is a unit vector for any in . Such a path is called the arc length parameterization of . This exercise asks you to show that such a path exists.  Let be any differentiable parameterization of with nonzero velocity vectors. Consider the scalar function Show that is an increasing function by finding its derivative .   Suppose the range of is . Since is increasing, it passes the horizontal line test and there is an inverse function with independent variable . Using the -variable inverse function theorem and chain rule, compute the derivative    Show that is an arc-length parameterization of .     Verify    Write the gradients of the following functions for a flat metric.   ,    ,    .    For part (a) and (c) in the previous exercise, give the direction vector for which the function, starting at , has steepest descent. For part (b) in the previous exercise, give the direction vector for which the function, starting at , has steepest descent.   Complete the following steps:  Write down an example of a non-zero quadratic form on .   Write down and solve the associated gradient flow ordinary differential equation.    Verify .    "
},
{
  "id": "subsec-metric-geometry-4",
  "level": "2",
  "url": "sec-gradient.html#subsec-metric-geometry-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "curvature "
},
{
  "id": "subsec-metric-geometry-5",
  "level": "2",
  "url": "sec-gradient.html#subsec-metric-geometry-5",
  "type": "Example",
  "number": "1.4.1",
  "title": "Circle parametrization.",
  "body": " Circle parametrization   Consider the circle of radius centered at the origin and take the usual parameterization where . If we take the derivative, we get Now, the norm is (here we identify a tangent vector with the vector for which it is the directional derivative) while the norm of can be calculated to be . This is because the parametrization is scaling the length of the interval by .   "
},
{
  "id": "example-graphmetric",
  "level": "2",
  "url": "sec-gradient.html#example-graphmetric",
  "type": "Example",
  "number": "1.4.2",
  "title": "Metrics of graphs.",
  "body": " Metrics of graphs   One class of examples of parameterized surfaces comes from considering graphs of functions. For example, if is a differentiable function on the plane then we can take its graph Such a subspace is, in a sense, already parameterized as we can define via Taking the derivative gives Thus if we look at the tangent vectors we see that their dot product is This is generally non-zero, even though . This is again because the image tangent vectors fail to be orthogonal.   "
},
{
  "id": "def-induced-inner-product",
  "level": "2",
  "url": "sec-gradient.html#def-induced-inner-product",
  "type": "Definition",
  "number": "1.4.3",
  "title": "",
  "body": "   Induced inner product    Let be an open subset of and a parameterization so that for any in with the tangent space is given by . The inner product on induced by is defined by   "
},
{
  "id": "prop-metricmatrix",
  "level": "2",
  "url": "sec-gradient.html#prop-metricmatrix",
  "type": "Proposition",
  "number": "1.4.4",
  "title": "",
  "body": "  Let be an open subset of and a parameterization. Then, if is in and are column vectors representing tangent vectors in , the inner product induced by at is   "
},
{
  "id": "subsec-metric-geometry-12",
  "level": "2",
  "url": "sec-gradient.html#subsec-metric-geometry-12",
  "type": "Example",
  "number": "1.4.5",
  "title": "Metric for spherical coordinates.",
  "body": " Metric for spherical coordinates   The world is not flat, but spherical coordinates gives us a flat domain on which to chart the world. Indeed, fixing the variable we may parameterize the unit sphere , which consists of all satisfying the constraint equation , using This is a function from a rectangle in the plane to the sphere (and is a parametrization on the interior of ) The horizontal lines in the rectangle go to latitudes and the vertical lines to longitudes. We compute the Jacobian matrix of to be which, by , gives us our tangent space inner products (represented as matrices) via This is a special situation to be in! Indeed, this tells us that, while the parametrization does not preserve lengths (it scales one by ), it still keeps the axes orthogonal. One can see this intuitively by noticing that latitude and longitude lines are still perpendicular where they meet.  One other point which we can observe through geometric intuition about this parameterization is that the surface area of the sphere (relative to the coordinates) certainly changes. We all learn at some point, for example, that Greenland is not larger than South America, even though it may appear so on some maps. The point is that on our map coordinates, we should scale area by and so, near the poles where and , we must scale down area quite a bit.   "
},
{
  "id": "def-Riemannian-metric",
  "level": "2",
  "url": "sec-gradient.html#def-Riemannian-metric",
  "type": "Definition",
  "number": "1.4.6",
  "title": "",
  "body": "   Riemannian metric    A domain in is said to have a Riemannian metric (or simply metric ) if there is a differentiable assignment of points in to inner products on their tangent space.   "
},
{
  "id": "def-gradient",
  "level": "2",
  "url": "sec-gradient.html#def-gradient",
  "type": "Definition",
  "number": "1.4.7",
  "title": "",
  "body": "   Gradient    Let be an open subset of a vector space with metric , and a differentiable scalar function. The gradient of at is the tangent vector for which The gradient of is the vector field with tangent vector at .   "
},
{
  "id": "prop-flatgradient",
  "level": "2",
  "url": "sec-gradient.html#prop-flatgradient",
  "type": "Proposition",
  "number": "1.4.8",
  "title": "",
  "body": "  If is an open subset of Euclidean space and is a differentiable function on then Alternatively, using the basis , one commonly writes this as the row vector    Exercise.   "
},
{
  "id": "subsec-steepest-ascent-7",
  "level": "2",
  "url": "sec-gradient.html#subsec-steepest-ascent-7",
  "type": "Example",
  "number": "1.4.9",
  "title": "Gradient computation I.",
  "body": " Gradient computation I   Consider and observe that tells us that   "
},
{
  "id": "subsec-steepest-ascent-8",
  "level": "2",
  "url": "sec-gradient.html#subsec-steepest-ascent-8",
  "type": "Example",
  "number": "1.4.10",
  "title": "Gradient computation II.",
  "body": " Gradient computation II   Take and compute   "
},
{
  "id": "def-steepest-ascent",
  "level": "2",
  "url": "sec-gradient.html#def-steepest-ascent",
  "type": "Definition",
  "number": "1.4.11",
  "title": "",
  "body": "   Steepest ascent    Suppose is a domain in with metric and is a differentiable scalar function at . The direction of steepest ascent of at is the unit tangent vector for which is maximized. I.e. for any other unit tangent vector , . Similarly, the direction of steepest descent of at is the unit tangent vector for which is minimized.   "
},
{
  "id": "subsec-steepest-ascent-14",
  "level": "2",
  "url": "sec-gradient.html#subsec-steepest-ascent-14",
  "type": "Proposition",
  "number": "1.4.12",
  "title": "",
  "body": "  Suppose is a domain in with metric and is a differentiable scalar function. If is not zero, then its normalization is the direction of steepest ascent of at . The negative of its normalization is the direction of steepest descent.    Let be any unit tangent vector. By we have By the definition of the gradient this also gives Finally, as we are in a real inner product space (and the assumption that is a unit vector) we have where is the angle between and . Now is maximized when and minimized when . These values correspond to when is in the direction of and in the opposite direction respectively.   "
},
{
  "id": "prop-increasingGradient",
  "level": "2",
  "url": "sec-gradient.html#prop-increasingGradient",
  "type": "Proposition",
  "number": "1.4.13",
  "title": "",
  "body": "  Suppose is a domain in with metric and is a differentiable scalar function. If is non-zero, there is a positive and a differentiable path with such that is strictly increasing.    Let us identify with the vector for which . Define to be the straight line parameterized through as Then the chain rule gives At , we have so that the derivative is which is positive. But since , and are continuous, this means that is positive for all in a small neighborhood around . Taking to be a small value for which this is true, we have that is a differentiable function with positive derivative and thus is strictly increasing.   "
},
{
  "id": "subsec-steepest-ascent-17",
  "level": "2",
  "url": "sec-gradient.html#subsec-steepest-ascent-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "gradient flow equation "
},
{
  "id": "exe-gradient-1",
  "level": "2",
  "url": "sec-gradient.html#exe-gradient-1",
  "type": "Exercise",
  "number": "1.4.3.1",
  "title": "",
  "body": "Let be the closed half-disc and consider the function given by  Find the matrix representing the inner product on induced by ?   Is a conformal map? Here we mean if are tangent vectors with Euclidean dot product, is the angle between them the same as the angle between their image vectors (also with the dot product). Explain your response.   Does preserve distance? Here we mean if is a tangent vector with Euclidean dot product, is its length the same as the length of its image vector (also with the dot product).  "
},
{
  "id": "exe-gradient-2",
  "level": "2",
  "url": "sec-gradient.html#exe-gradient-2",
  "type": "Exercise",
  "number": "1.4.3.2",
  "title": "",
  "body": " Let be a differentiable function and the induced parameterization of its graph. Show that preserves distance if and only if is a constant function.  "
},
{
  "id": "exe-gradient-3",
  "level": "2",
  "url": "sec-gradient.html#exe-gradient-3",
  "type": "Exercise",
  "number": "1.4.3.3",
  "title": "",
  "body": "For a connected smooth curve with endpoints and in , there is always an interval unique path for which , and is a unit vector for any in . Such a path is called the arc length parameterization of . This exercise asks you to show that such a path exists.  Let be any differentiable parameterization of with nonzero velocity vectors. Consider the scalar function Show that is an increasing function by finding its derivative .   Suppose the range of is . Since is increasing, it passes the horizontal line test and there is an inverse function with independent variable . Using the -variable inverse function theorem and chain rule, compute the derivative    Show that is an arc-length parameterization of .   "
},
{
  "id": "exe-gradient-4",
  "level": "2",
  "url": "sec-gradient.html#exe-gradient-4",
  "type": "Exercise",
  "number": "1.4.3.4",
  "title": "",
  "body": " Verify   "
},
{
  "id": "exe-gradient-5",
  "level": "2",
  "url": "sec-gradient.html#exe-gradient-5",
  "type": "Exercise",
  "number": "1.4.3.5",
  "title": "",
  "body": "Write the gradients of the following functions for a flat metric.   ,    ,    .  "
},
{
  "id": "exe-gradient-6",
  "level": "2",
  "url": "sec-gradient.html#exe-gradient-6",
  "type": "Exercise",
  "number": "1.4.3.6",
  "title": "",
  "body": " For part (a) and (c) in the previous exercise, give the direction vector for which the function, starting at , has steepest descent. For part (b) in the previous exercise, give the direction vector for which the function, starting at , has steepest descent.  "
},
{
  "id": "exe-gradient-7",
  "level": "2",
  "url": "sec-gradient.html#exe-gradient-7",
  "type": "Exercise",
  "number": "1.4.3.7",
  "title": "",
  "body": "Complete the following steps:  Write down an example of a non-zero quadratic form on .   Write down and solve the associated gradient flow ordinary differential equation.  "
},
{
  "id": "exe-gradient-8",
  "level": "2",
  "url": "sec-gradient.html#exe-gradient-8",
  "type": "Exercise",
  "number": "1.4.3.8",
  "title": "",
  "body": " Verify .  "
},
{
  "id": "sec-critical",
  "level": "1",
  "url": "sec-critical.html",
  "type": "Section",
  "number": "1.5",
  "title": "Critical points",
  "body": " Critical points   Looking over the propositions in the last section you may notice that the condition `assume the gradient does not vanish' appears multiple times. So what happens if this fails? Well, that's where things get interesting...     Critical point    Suppose is a domain with metric in and is scalar function. We call a critical point of if either is not differentiable at or if The value is called a of .    One can be more general than this and say that is a critical point of a vector valued if is not of full rank, but we will stay with scalar functions for the time being.   Computing critical points   Let and compute the gradient to find The critical points are points where so that both equations are satisfied. The latter equation is satisfied only when for some integer . For such , so the only way the first equation is satisfied for these values of is if . Thus the critical points of the function is the set Since the coordinate of any critical point is , the only critical value is .      Local extrema  The derivative of a function gives local information about that function. Let us make a definition of one such piece of information of a scalar function.     Local minimum and maximum    Suppose is a subset of , a point of and is a scalar function on . We say that achieves a local minimum (respectively local maximum ) at if there is a neighborhood of in such that (respectively ) for all of .    Local minima and maxima are extremely important notions in applications as they often describe points where systems are stable or optimized. Finding them can sometimes be a challenge, but one very helpful tool we can use is the following proposition.    Suppose is a domain with metric in and is scalar function. If achieves a local minimum or maximum at , then is a critical point of .    If is not differentiable at , then is a critical point and we need not argue further. Otherwise, suppose is differentiable at and it is a local minimum (the argument for maximum is similar). If is not a critical point then and, by , there is a path for which and is strictly increasing. But then for any with we have . This contradicts the assumption that is a local minimum for .    Let us be clear about how we use . If we want to find a local extreme point, we can look for critical points. However, it is not the case a given critical point will always be a local extreme point. Let us illustrate this with our three prototype scalar functions on .   Chain rule computation II   Let It is clear that is differentiable and We also see that the only critical point of is the origin . Thus the only local extreme point for is the origin, and as is always positive otherwise we have that achieves a local (and global) minimum at the origin.  A similar argument shows that has exactly one local (and global) maximum at the origin.  Now consider the last prototype and observe So here again is the only critical point. However, we see that along the -axis away from the origin, is positive and along the -axis away from the origin, is negative. So there is no chance that will have a local minimum or maximum at the origin. Critical points of this type have their own name as we now define.       Saddle point    Suppose is a domain with metric in and is scalar function. If is a critical point that is neither a local minimum nor a local maximum, then is called a saddle point of .    In general, saddle points can be quite complicated. Perhaps surprisingly though we can fully describe the local behavior of a function near a differentiable critical point so long as we have something called non-degeneracy. To get to this notion, we first define the Hessian.     The Hessian    Suppose is a domain with metric in and is scalar function with continuous second partial derivatives. The Hessian of is the matrix valued function Write for the Hessian of evaluated at . We say a critical point of is non-degenerate if has non-zero determinant.      Second derivative test  Note that by Clairaut's Theorem, the Hessian of is a symmetric matrix and thus can be linked to a quadratic form. In fact, the Hessian can be thought of as a second derivative for scalar functions. The next lemma shows how useful this can be.    Suppose is a domain with metric in , is scalar function with continuous second partial derivatives and let be a differentiable path. Assume is a critical point of . Then     This is an exercise in using the chain rule (twice). The first use shows Here we have a matrix product of the Jacobian matrix with the tangent vector . Taking the derivative again with respect to forces us to use the product rule Now, examining the second summand and evaluating at will give because is a critical point of . So we focus on the first summand and, in particular, the derivative The function can be written as the row vector Letting and using the chain rule on the -th entry above gives But this is simply the -th entry of the matrix product Thus we obtain the formula and conclude that, at      The following corollary follows from this lemma.    Suppose is a domain with metric in and is scalar function with continuous second partial derivatives and is a non-degenerate critical point of . By Sylvester's Theorem, there are negative eigenvalues of and positive eigenvalues of . Suppose are differentiable one-to-one maps sending to and and to the negative and positive eigenspaces of respectively. Then has a local maximum at and has a local minimum at .    We sketch the proof for , but skip a basic estimate. Using the continuity of the second derivatives and the largest negative eigenvalue, we have that there exists a global such that any vector in with the function is concave on the line from to . Indeed, taking the path defined by , we have that because is critical and because is in the negative eigenspace of . Using the one variable second derivative test, as well as the continuity of and its second derivatives, we can obtain a global for which implying is (strict) local maximum. An analogous argument holds for the positive eigenspaces and the minimum.    An important, but much less refined, corollary of this is the following result.   Second Derivative Test   Suppose is a domain in , is scalar function with continuous second partial derivatives and is a non-degenerate critical point of . Then   achieves a local minimum at if and only if is positive definite,   achieves a local maximum at if and only if is negative definite,   has a saddle point at if has both positive and negative eigenvalues.       The Morse Lemma  In fact, much more can be said about the local behavior of functions near critical points. We will mention a few of these things, but omit proofs as many of them occur much later in an undergraduate (or graduate) mathematics education. Perhaps first among such statements is second order approximations.    Suppose is a domain in and has continuous second partial derivatives at . Let and call the second order approximation of . If is the error function, then    This theorem justifies the notion that plays the role of a second derivative. Indeed, it is the second order term in a multivariable Taylor series expansion of our function around . The function is really the sum of our linear approximation and a quadratic form with associated matrix . This is the analog to first approximating by a tangent line, and then by a parabola. The parabola of course gives much more information than the line, especially when it comes to understanding critical behavior.  To drive home how precise this can be, we end this section with a relatively recent lemma (proven in 1929 by Marston Morse).   Morse Lemma   Suppose is a domain in and has continuous second partial derivatives. Let be a non-degenerate critical point of such that has positive eigenvalues and negative eigenvalues. Then there is an open ball centered at the origin in and a one-to-one differentiable function with for which    The function should be thought of as giving a new coordinate system to a neighborhood around . Then this theorem asserts that there is a coordinate system for which the quadratic approximation is not an approximation, but actually an equality. Of course, don't be fooled into thinking that this means functions equal their quadratic approximations in general! The change of coordinates can be quite impossible to write down explicitly, so there is a lot of complexity buried in it. But the picture of the local behavior at a non-degenerate critical point is laid bare by this theorem. For degenerate critical points however, there is still a great deal of active research!    Find all critical points for the following functions              Answer the following questions for each of the functions in the previous exercise,  What is the Hessian of the function at each critical point?   Which critical points are non-degenerate?   Identify which critical points are local minima, local maxima or saddle points.     The usual Second Derivative Test offered up in a multivariable calculus textbook will look very confusing compared to our treatment. Firstly, the only functions considered will be of two variables . Then there will be a definition of the discriminant  of at a critical point  Finally, the test will read:  Second Derivative Test   Suppose is defined in a neighborhood of with continuous second partial derivatives. If is a critical point and at then   and if and only if achieves a local minimum at ,   and if and only if achieves a local maximum at ,  if then has a saddle point at .    Give an explanation of why this test is identical to for the case of .  It may help to learn how to computationally determine positive definiteness (or negative definiteness) of a symmetric matrix. Perhaps look for some background reading on principal minors .    "
},
{
  "id": "def-critical-point",
  "level": "2",
  "url": "sec-critical.html#def-critical-point",
  "type": "Definition",
  "number": "1.5.1",
  "title": "",
  "body": "   Critical point    Suppose is a domain with metric in and is scalar function. We call a critical point of if either is not differentiable at or if The value is called a of .   "
},
{
  "id": "sec-critical-2-4",
  "level": "2",
  "url": "sec-critical.html#sec-critical-2-4",
  "type": "Example",
  "number": "1.5.2",
  "title": "Computing critical points.",
  "body": " Computing critical points   Let and compute the gradient to find The critical points are points where so that both equations are satisfied. The latter equation is satisfied only when for some integer . For such , so the only way the first equation is satisfied for these values of is if . Thus the critical points of the function is the set Since the coordinate of any critical point is , the only critical value is .   "
},
{
  "id": "def-local-extrema",
  "level": "2",
  "url": "sec-critical.html#def-local-extrema",
  "type": "Definition",
  "number": "1.5.3",
  "title": "",
  "body": "   Local minimum and maximum    Suppose is a subset of , a point of and is a scalar function on . We say that achieves a local minimum (respectively local maximum ) at if there is a neighborhood of in such that (respectively ) for all of .   "
},
{
  "id": "prop-localextremecritical",
  "level": "2",
  "url": "sec-critical.html#prop-localextremecritical",
  "type": "Proposition",
  "number": "1.5.4",
  "title": "",
  "body": "  Suppose is a domain with metric in and is scalar function. If achieves a local minimum or maximum at , then is a critical point of .    If is not differentiable at , then is a critical point and we need not argue further. Otherwise, suppose is differentiable at and it is a local minimum (the argument for maximum is similar). If is not a critical point then and, by , there is a path for which and is strictly increasing. But then for any with we have . This contradicts the assumption that is a local minimum for .   "
},
{
  "id": "subsec-local-extrema-7",
  "level": "2",
  "url": "sec-critical.html#subsec-local-extrema-7",
  "type": "Example",
  "number": "1.5.5",
  "title": "Chain rule computation II.",
  "body": " Chain rule computation II   Let It is clear that is differentiable and We also see that the only critical point of is the origin . Thus the only local extreme point for is the origin, and as is always positive otherwise we have that achieves a local (and global) minimum at the origin.  A similar argument shows that has exactly one local (and global) maximum at the origin.  Now consider the last prototype and observe So here again is the only critical point. However, we see that along the -axis away from the origin, is positive and along the -axis away from the origin, is negative. So there is no chance that will have a local minimum or maximum at the origin. Critical points of this type have their own name as we now define.   "
},
{
  "id": "def-saddle-point",
  "level": "2",
  "url": "sec-critical.html#def-saddle-point",
  "type": "Definition",
  "number": "1.5.6",
  "title": "",
  "body": "   Saddle point    Suppose is a domain with metric in and is scalar function. If is a critical point that is neither a local minimum nor a local maximum, then is called a saddle point of .   "
},
{
  "id": "def-hessian",
  "level": "2",
  "url": "sec-critical.html#def-hessian",
  "type": "Definition",
  "number": "1.5.7",
  "title": "",
  "body": "   The Hessian    Suppose is a domain with metric in and is scalar function with continuous second partial derivatives. The Hessian of is the matrix valued function Write for the Hessian of evaluated at . We say a critical point of is non-degenerate if has non-zero determinant.   "
},
{
  "id": "prop-criticalpoint",
  "level": "2",
  "url": "sec-critical.html#prop-criticalpoint",
  "type": "Lemma",
  "number": "1.5.8",
  "title": "",
  "body": "  Suppose is a domain with metric in , is scalar function with continuous second partial derivatives and let be a differentiable path. Assume is a critical point of . Then     This is an exercise in using the chain rule (twice). The first use shows Here we have a matrix product of the Jacobian matrix with the tangent vector . Taking the derivative again with respect to forces us to use the product rule Now, examining the second summand and evaluating at will give because is a critical point of . So we focus on the first summand and, in particular, the derivative The function can be written as the row vector Letting and using the chain rule on the -th entry above gives But this is simply the -th entry of the matrix product Thus we obtain the formula and conclude that, at     "
},
{
  "id": "thm-saddle",
  "level": "2",
  "url": "sec-critical.html#thm-saddle",
  "type": "Theorem",
  "number": "1.5.9",
  "title": "",
  "body": "  Suppose is a domain with metric in and is scalar function with continuous second partial derivatives and is a non-degenerate critical point of . By Sylvester's Theorem, there are negative eigenvalues of and positive eigenvalues of . Suppose are differentiable one-to-one maps sending to and and to the negative and positive eigenspaces of respectively. Then has a local maximum at and has a local minimum at .    We sketch the proof for , but skip a basic estimate. Using the continuity of the second derivatives and the largest negative eigenvalue, we have that there exists a global such that any vector in with the function is concave on the line from to . Indeed, taking the path defined by , we have that because is critical and because is in the negative eigenspace of . Using the one variable second derivative test, as well as the continuity of and its second derivatives, we can obtain a global for which implying is (strict) local maximum. An analogous argument holds for the positive eigenspaces and the minimum.   "
},
{
  "id": "cor-secondderivativetest",
  "level": "2",
  "url": "sec-critical.html#cor-secondderivativetest",
  "type": "Corollary",
  "number": "1.5.10",
  "title": "Second Derivative Test.",
  "body": " Second Derivative Test   Suppose is a domain in , is scalar function with continuous second partial derivatives and is a non-degenerate critical point of . Then   achieves a local minimum at if and only if is positive definite,   achieves a local maximum at if and only if is negative definite,   has a saddle point at if has both positive and negative eigenvalues.    "
},
{
  "id": "thm-secondorder",
  "level": "2",
  "url": "sec-critical.html#thm-secondorder",
  "type": "Theorem",
  "number": "1.5.11",
  "title": "",
  "body": "  Suppose is a domain in and has continuous second partial derivatives at . Let and call the second order approximation of . If is the error function, then   "
},
{
  "id": "thm-morse",
  "level": "2",
  "url": "sec-critical.html#thm-morse",
  "type": "Theorem",
  "number": "1.5.12",
  "title": "Morse Lemma.",
  "body": " Morse Lemma   Suppose is a domain in and has continuous second partial derivatives. Let be a non-degenerate critical point of such that has positive eigenvalues and negative eigenvalues. Then there is an open ball centered at the origin in and a one-to-one differentiable function with for which   "
},
{
  "id": "exe-critical-1",
  "level": "2",
  "url": "sec-critical.html#exe-critical-1",
  "type": "Exercise",
  "number": "1.5.4.1",
  "title": "",
  "body": "Find all critical points for the following functions             "
},
{
  "id": "exe-critical-2",
  "level": "2",
  "url": "sec-critical.html#exe-critical-2",
  "type": "Exercise",
  "number": "1.5.4.2",
  "title": "",
  "body": "Answer the following questions for each of the functions in the previous exercise,  What is the Hessian of the function at each critical point?   Which critical points are non-degenerate?   Identify which critical points are local minima, local maxima or saddle points.   "
},
{
  "id": "exercise-2dsecondderivativetest",
  "level": "2",
  "url": "sec-critical.html#exercise-2dsecondderivativetest",
  "type": "Exercise",
  "number": "1.5.4.3",
  "title": "",
  "body": " The usual Second Derivative Test offered up in a multivariable calculus textbook will look very confusing compared to our treatment. Firstly, the only functions considered will be of two variables . Then there will be a definition of the discriminant  of at a critical point  Finally, the test will read:  Second Derivative Test   Suppose is defined in a neighborhood of with continuous second partial derivatives. If is a critical point and at then   and if and only if achieves a local minimum at ,   and if and only if achieves a local maximum at ,  if then has a saddle point at .    Give an explanation of why this test is identical to for the case of .  It may help to learn how to computationally determine positive definiteness (or negative definiteness) of a symmetric matrix. Perhaps look for some background reading on principal minors .  "
},
{
  "id": "sec-optimization1",
  "level": "1",
  "url": "sec-optimization1.html",
  "type": "Section",
  "number": "1.6",
  "title": "Optimization without constraints",
  "body": " Optimization without constraints   The methods of the last section allow us to find local minima and maxima, but often we are interested in finding a global maximum and minimum. As it turns out, the methods used to find such extreme points depends heavily on the type of domain you are working with.    Global extrema  The first question one should ask before looking for such points (and values) is whether such extrema exist at all. Happily, there is a multivariable generalization of the one variable Extreme Value Theorem. We prove this theorem up to some standard analytical results which are cited.   Extreme Value Theorem   Suppose is a closed and bounded domain in and is a continuous scalar function. Then there exists points and in such that for all ,    The key result we need is that closed and bounded domains satisfy the property of being compact (this fact is the Heine-Borel Theorem). Compactness of a set can be defined in a few ways, but we will use the following characterization: any sequence of points in will have a convergent subsequence . Now if and are the least upper and greatest lower bounds of (allowing as well). Then we can find a sequence and for which Since is compact we can also choose subsequences and which converge to points and . I.e. Now, subsequences of convergent sequences converge to the same limit, so we still have the limits But since is continuous, we then obtain, This completes the proof.    For now, let us mention how this theorem fails if we do not satisfy the hypothesis.   Failure to obtain a global extreme value   Recall that a closed domain in is a subset for which, given any point  not in , there exists a ball around which does not intersect (alternatively, the complement of is open). For example, closed balls are open and so is all of . However, a bounded domain is a domain that can be put inside a large enough ball, implying that while is closed, it is not bounded. But of course the continuous function has no maximum or minimum value. So the condition that be bounded is vital for the Extreme Value Theorem. On the other hand, if we take the closed ball and puncture the center to get , we have a bounded but no longer closed set. The function has no maximum value on this set, but is continuous. So again, the closed condition is vital to guarantee that a global minimum and maximum exist.    While it is important to understand that there may not exist a global maximum or minimum for functions on certain domains, often they may exist and we can use our prior results to find good candidates for them. Suppose is an open domain in and is a function. To find possible extreme values, we follow the instructions:   Find critical points of ,  Identify local minima and maxima,  Evaluate at all of these points,  Examine boundary or asymptotic behavior of to see if it exceeds the candidate extremes.   Note that if we only find saddle points at step (3), we can conclude that no global extremes for exist on because a global extreme must also be a local extreme. The last item in our instruction set may prove to be fairly difficult, depending on the domain and function . However, we illustrate this simple technique in a few examples.   Optimization I   Let For our first step, we set to zero and find all solutions. In this case we have The only solution to this equation is the point . For the second step, we find the Hessian to be which is certainly positive definite. Thus is a local minimum with value . Now, we can observe that there is no global max of (for certainly it would also be a local maximum as well). Furthermore, as becomes large, one can see that also increases, so is a global min as well.  Of course, in this case we could re-express our function as and come to the same conclusion more quickly, but at least we verify here that our instruction set works.     Optimization II   Let Again, our first step is to set to zero and find all solutions. In this case we have Solving the equation for the first coordinate gives that which expresses in terms of . We use this in the second equation to see that The only real solutions for are then which means that and are the only critical points of . For the second step, we find the Hessian to be Evaluating at the critical point gives The determinant of this matrix is negative which implies that is a saddle point (see ).  Evaluating at the critical point gives The determinant of this matrix is again negative which implies that is also saddle point. So in this example, there is no global maximum or global minimum for our function.    While it is useful in some circumstances to optimize functions of two or three variables, many important applications involve optimizing with many variables.    Least Squares  Suppose we several data points and associated values which depend on in . In other words, to each we have an observed value . In such a situation, one may wish to define an affine function which best the value of as a function of the data space . Here is the vector of coefficients and is the constant value.  Now, given a data point with value we may also apply to obtain . Thus is the observed value while is the value predicted by the function. The difference is called the -th residual. Of course, if all of these residuals are zero, then our function perfectly predicts observations. In general, this is a fantasy and will not happen. So the best we can do is try and minimize the absolute value of these residuals. This can be accomplished by minimizing the sum of their squares which is the function Now, let us assume that there are data points. We can consider the row column vector whose -th coordinate is the -th observed value . I.e. We write for the vector with in every coordinate. Write for the matrix with -th column equal to . Explicitly, we take Then, taking to be the row vector in , we may rewrite our function as follows We are interested in this formulation because it allows us to apply our optimization strategy on the defining constants and of . First, using the product rule on the dot product, we take the partial with respect to to see that Here is the average of and is the average of the observed values . Setting this equal to zero and dividing by gives With this value of , we may rewrite as where replaces each column with the column and likewise shifts each observed value by subtracting the average.  Using this, we can more easily compute the partial derivative Since we must have this equal to zero for each we obtain the single matrix equation Now, if we divide both sides by , and recall the definition of the covariance matrix , we see that this equation is Here we take to be the right hand side of equation divided by . This is the vector of covariances of the coordinates of and the observed value (although this is a bit non-standard as it is mixing a vector random variable with a scalar random variable. In general, one will create a larger covariance matrix to encode this vector).  Now, as was pointed out during the discussion on the covariance matrix, most data sets will have a positive definite (not just semi-definite) covariance matrix, so that is invertible. This means that equation has a unique solution   Best fit line   The most common application of the above procedure (by far) is to use least squares to find the best fit line (the case of ). In this case, the covariance matrix is simply the variance of the data points in and is the usual covariance between two random variables and . Of course, here, we are looking for the affine function which is more commonly written in slope intercept form Then, letting and be the means of our data set and observed values respectively, our formulas for and reduce to   We can impliment this formula easily using Sage.    Gradient descent  A neural network can be tasked with learning a particular function which is defined using parameters . The goal is to find the function that best predicts an outcome of observed values for a data point in . Thus the program aims to find the parameters which define the best possible function . A key ingredient in accomplishing this is the \\textbf{cost function} Here there are data points with values . This is a version of a least squares approximation (but now is not necessarily linear). Now, taking partials of with respect to gives Note that the term is just the negative of the -th residual in the model. Now, for many types of functions , the -th partial can be computed and expressed easily in terms of the data points and parameters . In such a case, one can explicitly compute the negative gradient field at a point .  Now, the point of the neural network is to minimize cost, so moving in the parameter space by a multiple of should give a more accurate version of . In other words, our neural network can adjust its old parameters to The scaling factor is called the learning rate and can be chosen too large (in which case overshoots a minimum) or too small (in which case approaches a minimum very slowly).     Give an example of a differentiable function on the punctured closed unit disc in which has a bounded range but no global maximum or minimum value.   Let  Find all critical points of ,   Find candidates for minima and maxima,   Find a global minimum and global maximum if it exists. Explain your response.   Let  Find all critical points of ,   Find candidates for minima and maxima,   Find a global minimum and global maximum if it exists. Explain your response.   Suppose one has the (extremely small) data set with vectors An experiment is run on this data set producing the values    The mean of is . Find the mean of and compute .   Find the covariance matrix of ,   Find the values and which give the affine function that best fits the data.    Suppose has the form In this case, write the gradient of the cost function for sample points.    "
},
{
  "id": "thm-extremevaluetheorem",
  "level": "2",
  "url": "sec-optimization1.html#thm-extremevaluetheorem",
  "type": "Theorem",
  "number": "1.6.1",
  "title": "Extreme Value Theorem.",
  "body": " Extreme Value Theorem   Suppose is a closed and bounded domain in and is a continuous scalar function. Then there exists points and in such that for all ,    The key result we need is that closed and bounded domains satisfy the property of being compact (this fact is the Heine-Borel Theorem). Compactness of a set can be defined in a few ways, but we will use the following characterization: any sequence of points in will have a convergent subsequence . Now if and are the least upper and greatest lower bounds of (allowing as well). Then we can find a sequence and for which Since is compact we can also choose subsequences and which converge to points and . I.e. Now, subsequences of convergent sequences converge to the same limit, so we still have the limits But since is continuous, we then obtain, This completes the proof.   "
},
{
  "id": "subsec-global-extrema-5",
  "level": "2",
  "url": "sec-optimization1.html#subsec-global-extrema-5",
  "type": "Example",
  "number": "1.6.2",
  "title": "Failure to obtain a global extreme value.",
  "body": " Failure to obtain a global extreme value   Recall that a closed domain in is a subset for which, given any point  not in , there exists a ball around which does not intersect (alternatively, the complement of is open). For example, closed balls are open and so is all of . However, a bounded domain is a domain that can be put inside a large enough ball, implying that while is closed, it is not bounded. But of course the continuous function has no maximum or minimum value. So the condition that be bounded is vital for the Extreme Value Theorem. On the other hand, if we take the closed ball and puncture the center to get , we have a bounded but no longer closed set. The function has no maximum value on this set, but is continuous. So again, the closed condition is vital to guarantee that a global minimum and maximum exist.   "
},
{
  "id": "subsec-global-extrema-9",
  "level": "2",
  "url": "sec-optimization1.html#subsec-global-extrema-9",
  "type": "Example",
  "number": "1.6.3",
  "title": "Optimization I.",
  "body": " Optimization I   Let For our first step, we set to zero and find all solutions. In this case we have The only solution to this equation is the point . For the second step, we find the Hessian to be which is certainly positive definite. Thus is a local minimum with value . Now, we can observe that there is no global max of (for certainly it would also be a local maximum as well). Furthermore, as becomes large, one can see that also increases, so is a global min as well.  Of course, in this case we could re-express our function as and come to the same conclusion more quickly, but at least we verify here that our instruction set works.   "
},
{
  "id": "subsec-global-extrema-10",
  "level": "2",
  "url": "sec-optimization1.html#subsec-global-extrema-10",
  "type": "Example",
  "number": "1.6.4",
  "title": "Optimization II.",
  "body": " Optimization II   Let Again, our first step is to set to zero and find all solutions. In this case we have Solving the equation for the first coordinate gives that which expresses in terms of . We use this in the second equation to see that The only real solutions for are then which means that and are the only critical points of . For the second step, we find the Hessian to be Evaluating at the critical point gives The determinant of this matrix is negative which implies that is a saddle point (see ).  Evaluating at the critical point gives The determinant of this matrix is again negative which implies that is also saddle point. So in this example, there is no global maximum or global minimum for our function.   "
},
{
  "id": "subsec-least-squares-6",
  "level": "2",
  "url": "sec-optimization1.html#subsec-least-squares-6",
  "type": "Example",
  "number": "1.6.5",
  "title": "Best fit line.",
  "body": " Best fit line   The most common application of the above procedure (by far) is to use least squares to find the best fit line (the case of ). In this case, the covariance matrix is simply the variance of the data points in and is the usual covariance between two random variables and . Of course, here, we are looking for the affine function which is more commonly written in slope intercept form Then, letting and be the means of our data set and observed values respectively, our formulas for and reduce to   "
},
{
  "id": "subsec-gradient-descent-3",
  "level": "2",
  "url": "sec-optimization1.html#subsec-gradient-descent-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "learning rate "
},
{
  "id": "exe-optimization1-1",
  "level": "2",
  "url": "sec-optimization1.html#exe-optimization1-1",
  "type": "Exercise",
  "number": "1.6.4.1",
  "title": "",
  "body": " Give an example of a differentiable function on the punctured closed unit disc in which has a bounded range but no global maximum or minimum value.  "
},
{
  "id": "exe-optimization1-2",
  "level": "2",
  "url": "sec-optimization1.html#exe-optimization1-2",
  "type": "Exercise",
  "number": "1.6.4.2",
  "title": "",
  "body": "Let  Find all critical points of ,   Find candidates for minima and maxima,   Find a global minimum and global maximum if it exists. Explain your response.  "
},
{
  "id": "exe-optimization1-3",
  "level": "2",
  "url": "sec-optimization1.html#exe-optimization1-3",
  "type": "Exercise",
  "number": "1.6.4.3",
  "title": "",
  "body": "Let  Find all critical points of ,   Find candidates for minima and maxima,   Find a global minimum and global maximum if it exists. Explain your response.  "
},
{
  "id": "exe-optimization1-4",
  "level": "2",
  "url": "sec-optimization1.html#exe-optimization1-4",
  "type": "Exercise",
  "number": "1.6.4.4",
  "title": "",
  "body": "Suppose one has the (extremely small) data set with vectors An experiment is run on this data set producing the values    The mean of is . Find the mean of and compute .   Find the covariance matrix of ,   Find the values and which give the affine function that best fits the data.  "
},
{
  "id": "exe-optimization1-5",
  "level": "2",
  "url": "sec-optimization1.html#exe-optimization1-5",
  "type": "Exercise",
  "number": "1.6.4.5",
  "title": "",
  "body": " Suppose has the form In this case, write the gradient of the cost function for sample points.  "
},
{
  "id": "sec-optimization2",
  "level": "1",
  "url": "sec-optimization2.html",
  "type": "Section",
  "number": "1.7",
  "title": "Optimization with constraints",
  "body": " Optimization with constraints   In the last section, we found that there are many examples where it is not possible to find a global minimum or maximum. However, for closed and bounded domains and continuous functions , we were given comfort by the Extreme Value Theorem. Many closed and bounded domains can be expressed using basic inequalities. For example, in one dimension, we have the interval can be written In dimensions, we could consider the unit disc or a triangle  In three dimensions, one could consider balls, ellipsoids, solid tori, polytopes and countless other solid bodies. In higher dimensions, we can consider even more shapes. Of course, the closed ball of radius centered at is a major basic example While there are closed and bounded domains that are not so easily expressed through finitely many inequalities, the category of such domains is quite expansive and useful to work with. Often, such domains can be broken into two parts, their interior and their boundary . The interior is the largest open set contained in and consists of all points in , but not in its interior. When optimizing on such a closed set, we must also split our work up into a two step procedure.  Optimize on the interior using critical points and Hessian,  Optimize on the boundary .  After this, we may compare the values of our function. Depending on the domain, the boundary can be quite complicated in general, but we start with the case when they are described by a single constraint equation.    Single constraint  We start with an example to see a new wrinkle in our problem.   Optimization on a circle I   Consider the closed unit disc which has interior the open unit disc and boundary the circle. By the Extreme Value Theorem, any continuous function has a maximum and minimum value on . Take the linear scalar function If we compute the derivative of we get So there are no solutions to and no extrema on . This means that the extreme values \\textit{must} be on the boundary of which is the unit circle .  So now we must maximize while on the curve given by the constraint In our case, we are lucky in that we have a parameterization of the boundary in hand Composing with we obtain and taking derivatives we have So the critical points of are exactly when (just setting the derivative to zero as in one variable calculus). This occurs for or and the values of at these two points are and respectively.  Thus when we restrict to the boundary, we have maximum value and minimum value . As the extremes of on occur on the boundary, these must be the extreme values of on .    There are two important facts to learn from our last example. First, because we had extreme points on the constrained space , the maximum and minimum were not critical points of as a function of . Indeed, had no such critical points. Second, our method to optimize on the boundary relied on the fact that we could parameterize the boundary. This second point presents a real problem in more general situations where such a parameterization may be extremely complicated or difficult to write down. This is precisely where Lagrange multipliers comes to the rescue!  To state the result, we need the notion of a critical point on a constrained space. This involves a couple of definitions and a major theorem in between.     Smooth parameterization    We say that a subspace of is smooth at if the there is an open set of and a smooth parameterization with image equal to a ball in intersected with . We say that is smooth if it is closed and smooth at every point in .    The idea of this definition is to describe spaces that locally look like . For example, the constrained space consists of two curves each of which look like (just with a little bend). However, consists of both the and -axis which cross at the origin, so at the origin we would say that this constrained space is not smooth.  Let us now state a major pillar of differential calculus.   Implicit Function Theorem   Suppose is an open subset of and is a differentiable function for which has rank . Then the level set is smooth at .    After spending a moment with this theorem, one understands it to mean that if a level set (or constrained set) is defined implicitly by in such a way that the derivative of is full rank, then that set admits a nice parameterization. Our example of can be checked by seeing that so that the Implicit Function Theorem does not apply.  Returning to optimization on a constrained space, we need the following definition.     Critical point on subspace    Suppose is a subspace of contained in an open set and is a scalar function. We say that a point of is a \\textbf{critical point of restricted to } if either:   is not smooth at ,   is smooth at and, given any parameterization of near with , is a critical point of the composition .      Note that part (2) of the definition does not depend on the parameterization that is chosen for at (verify this with an application of the chain rule). The main point of this definition is the following result.    Suppose is a subspace of contained in an open set and is a scalar function. If is a local maximum or minimum of restricted to then it is a critical point of restricted to .    This follows from assembling the previous definitions. For example, if is a local maximum and is not a smooth point of , then it is already a critical point of . So we may assume it is a smooth point. As a local maximum, there is a neighborhood of for which is maximal in (this is the meaning of local maximum of on ). Being a smooth point, there is another neighborhood of for which admits a smooth parameterization . We may shrink both these sets by taking intersection and take . Then the values of on are exactly the values of on . But as is a maximum of on , achieves its maximum on (where ). But then ensures that is a critical point of so that is a critical point of restricted to .     Optimization on a circle II   In we saw that had no critical points on . However, if we write for the unit circle, we can see that it is a smooth subspace. We also were able to globally parameterize it with and observe that and are both critical points of . Our next proposition gives us tools to discover this without parameterizing the constrained space.     Lagrange multipliers with one constraint   Suppose is an open set in , and two differentiable scalar functions. If is the level set of then a smooth point is a critical point of if and only if there is a real number such that    To prove this, we recall . Since is smooth at , there exists a parameterization and implies that either or the image of is precisely the kernel of . Now, is a critical point of if and only if . This last equation holds if and only the kernel of is contained in the kernel of . Our result then follows from the following linear algebra lemma.    If one finds such a solving equation we call it a Lagrange multiplier . This proposition is formulated in many other ways in the literature. First, one usually formulates in terms of gradients (which is equivalent to using the derivatives) and writes Lagrange's equation as Also, one may approach this subject by considering the optimization problem of the Lagrangian function We leave it as an exercise to prove that this approach also yields our proposition. Let us prove the proposition and then work through some examples.    If is a vector space over and are dual vectors, then if and only if there exists in with .    If then and must be zero as well. So assume . Then there is a vector not in . Let If is any vector in then we note that is in the kernel of and thus also in the kernel of . But we can also write this vector as and taking gives As this is true for any vector of , we have that as dual vectors.    Having proven that Lagrange multipliers supply us with critical points of , let us consider a few example applications starting with another look at .   Optimization on a circle III   Recall here we have the function on the unit disc. The constraint for the boundary of the unit disc is . Computing derivatives gives Writing Lagrange's equation produces a new variable and the two equations. Dividing by gives which, of course, describes a line in . However, we are only interested in solutions to Lagrange's equation for points on our constrained curve . So putting the equation in with the constraint gives This implies recovering the two points we found in .    The moral of the Lagrange multiplier story is that we do not need to parameterize the level set in order to find critical points of a function restricted to this set. We can work implicitly instead to identify such points. Indeed, one should have noticed in the last example that there was no mention of or , just solutions to basic equations, and yet we still found our minimum and maximum points.   Optimization on a hyperboloid   Let be the hyperboloid Suppose and that we want to find critical points of on . The constraint function is then and we compute derivatives to see Writing Lagrange's equation produces a new variable and the three equations. We now must be somewhat careful proceeding. A common mistake is to forget special cases and thereby miss critical points. For example, one may overlook that the first equation does \\textit{not} imply that ! Instead, we have two possible cases:  First we assume so that the first equation is satisfied. If is also zero, then we have a problem because our constraint has that which is not possible in the real numbers. So we may assume and . Putting this into the last equation gives that and our solution set consists of points . Returning to the constraint equation gives or . So we attain critical points of .  Now for the case of we may divide the first equation by and conclude that . The second equation then forces us to assume that and the third gives . Using the constraint again gives the critical points of .  Now that we have found all of the critical points of , we can ask if any of them are maxima or minima. In fact, in this case none of them are as can be arbitrarily large or small on the hyperboloid (check this!). One way to see the local behavior of on is to take the Hessian and restrict it to the tangent space of at the corresponding critical point. Recall that specifies the tangent space to at as the kernel of . It is left as an exercise to then see that the Hessian restricted to each tangent space gives a non-degenerate quadratic form (even though is degenerate on ) and is neither positive nor negative definite. Thus each of these critical points are saddle points.      Several constraints  We now give the generalization of this method to the case of several constraints.   Lagrange multipliers with several constraints   Suppose is an open set in , a differentiable vector valued function with of full rank and a differentiable scalar function. If is the level set of then a smooth point is a critical point of if and only if there are real numbers such that    The proof of this generalization is nearly identical to the one for one constraint, however, you will need the following more general linear algebra lemma.    If is a vector space over and are dual vectors, then if and only if there exists in with    We work through one example of this more general version.   Chain rule computation II   Recall that we may define the torus as In other words, if we take the vector valued function then is the level set . Now suppose we want to optimize on . We first note that is both closed (since it is given as the level set of a continuous function) and bounded, so the Extreme Value Theorem assures us that will achieve a maximum and minimum value. We apply our new technique by first computing derivatives Now, Lagrange's equation in this setting says that we must be able to find and so that Dividing by gives the more pleasant equation Now, if then the constraint implies and . On the other hand, if then and . But in this case we get that the constraint implies again, so the only values of for which exist are . A similar argument shows that exists only if is or . Thus the critical points of are A quick computation shows that the values of at these points is so that the maximum of on the torus is and the minimum is .      Show that the following constrained spaces are smooth or identify points where they are not.   ,    ,        If possible, optimize the function on     If possible, optimize the function on     Prove .    "
},
{
  "id": "example-boundary1",
  "level": "2",
  "url": "sec-optimization2.html#example-boundary1",
  "type": "Example",
  "number": "1.7.1",
  "title": "Optimization on a circle I.",
  "body": " Optimization on a circle I   Consider the closed unit disc which has interior the open unit disc and boundary the circle. By the Extreme Value Theorem, any continuous function has a maximum and minimum value on . Take the linear scalar function If we compute the derivative of we get So there are no solutions to and no extrema on . This means that the extreme values \\textit{must} be on the boundary of which is the unit circle .  So now we must maximize while on the curve given by the constraint In our case, we are lucky in that we have a parameterization of the boundary in hand Composing with we obtain and taking derivatives we have So the critical points of are exactly when (just setting the derivative to zero as in one variable calculus). This occurs for or and the values of at these two points are and respectively.  Thus when we restrict to the boundary, we have maximum value and minimum value . As the extremes of on occur on the boundary, these must be the extreme values of on .   "
},
{
  "id": "def-smooth",
  "level": "2",
  "url": "sec-optimization2.html#def-smooth",
  "type": "Definition",
  "number": "1.7.2",
  "title": "",
  "body": "   Smooth parameterization    We say that a subspace of is smooth at if the there is an open set of and a smooth parameterization with image equal to a ball in intersected with . We say that is smooth if it is closed and smooth at every point in .   "
},
{
  "id": "thm-implicit-function-theorem",
  "level": "2",
  "url": "sec-optimization2.html#thm-implicit-function-theorem",
  "type": "Theorem",
  "number": "1.7.3",
  "title": "Implicit Function Theorem.",
  "body": " Implicit Function Theorem   Suppose is an open subset of and is a differentiable function for which has rank . Then the level set is smooth at .   "
},
{
  "id": "def-critical-point-on-subspace",
  "level": "2",
  "url": "sec-optimization2.html#def-critical-point-on-subspace",
  "type": "Definition",
  "number": "1.7.4",
  "title": "",
  "body": "   Critical point on subspace    Suppose is a subspace of contained in an open set and is a scalar function. We say that a point of is a \\textbf{critical point of restricted to } if either:   is not smooth at ,   is smooth at and, given any parameterization of near with , is a critical point of the composition .     "
},
{
  "id": "prop-constrained-critical",
  "level": "2",
  "url": "sec-optimization2.html#prop-constrained-critical",
  "type": "Proposition",
  "number": "1.7.5",
  "title": "",
  "body": "  Suppose is a subspace of contained in an open set and is a scalar function. If is a local maximum or minimum of restricted to then it is a critical point of restricted to .    This follows from assembling the previous definitions. For example, if is a local maximum and is not a smooth point of , then it is already a critical point of . So we may assume it is a smooth point. As a local maximum, there is a neighborhood of for which is maximal in (this is the meaning of local maximum of on ). Being a smooth point, there is another neighborhood of for which admits a smooth parameterization . We may shrink both these sets by taking intersection and take . Then the values of on are exactly the values of on . But as is a maximum of on , achieves its maximum on (where ). But then ensures that is a critical point of so that is a critical point of restricted to .   "
},
{
  "id": "subsec-single-constraint-15",
  "level": "2",
  "url": "sec-optimization2.html#subsec-single-constraint-15",
  "type": "Example",
  "number": "1.7.6",
  "title": "Optimization on a circle II.",
  "body": " Optimization on a circle II   In we saw that had no critical points on . However, if we write for the unit circle, we can see that it is a smooth subspace. We also were able to globally parameterize it with and observe that and are both critical points of . Our next proposition gives us tools to discover this without parameterizing the constrained space.   "
},
{
  "id": "prop-lagrange-multipliers",
  "level": "2",
  "url": "sec-optimization2.html#prop-lagrange-multipliers",
  "type": "Proposition",
  "number": "1.7.7",
  "title": "Lagrange multipliers with one constraint.",
  "body": " Lagrange multipliers with one constraint   Suppose is an open set in , and two differentiable scalar functions. If is the level set of then a smooth point is a critical point of if and only if there is a real number such that    To prove this, we recall . Since is smooth at , there exists a parameterization and implies that either or the image of is precisely the kernel of . Now, is a critical point of if and only if . This last equation holds if and only the kernel of is contained in the kernel of . Our result then follows from the following linear algebra lemma.   "
},
{
  "id": "subsec-single-constraint-17",
  "level": "2",
  "url": "sec-optimization2.html#subsec-single-constraint-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lagrange multiplier "
},
{
  "id": "subsec-single-constraint-18",
  "level": "2",
  "url": "sec-optimization2.html#subsec-single-constraint-18",
  "type": "Lemma",
  "number": "1.7.8",
  "title": "",
  "body": "  If is a vector space over and are dual vectors, then if and only if there exists in with .    If then and must be zero as well. So assume . Then there is a vector not in . Let If is any vector in then we note that is in the kernel of and thus also in the kernel of . But we can also write this vector as and taking gives As this is true for any vector of , we have that as dual vectors.   "
},
{
  "id": "subsec-single-constraint-20",
  "level": "2",
  "url": "sec-optimization2.html#subsec-single-constraint-20",
  "type": "Example",
  "number": "1.7.9",
  "title": "Optimization on a circle III.",
  "body": " Optimization on a circle III   Recall here we have the function on the unit disc. The constraint for the boundary of the unit disc is . Computing derivatives gives Writing Lagrange's equation produces a new variable and the two equations. Dividing by gives which, of course, describes a line in . However, we are only interested in solutions to Lagrange's equation for points on our constrained curve . So putting the equation in with the constraint gives This implies recovering the two points we found in .   "
},
{
  "id": "ex-lagrange1",
  "level": "2",
  "url": "sec-optimization2.html#ex-lagrange1",
  "type": "Example",
  "number": "1.7.10",
  "title": "Optimization on a hyperboloid.",
  "body": " Optimization on a hyperboloid   Let be the hyperboloid Suppose and that we want to find critical points of on . The constraint function is then and we compute derivatives to see Writing Lagrange's equation produces a new variable and the three equations. We now must be somewhat careful proceeding. A common mistake is to forget special cases and thereby miss critical points. For example, one may overlook that the first equation does \\textit{not} imply that ! Instead, we have two possible cases:  First we assume so that the first equation is satisfied. If is also zero, then we have a problem because our constraint has that which is not possible in the real numbers. So we may assume and . Putting this into the last equation gives that and our solution set consists of points . Returning to the constraint equation gives or . So we attain critical points of .  Now for the case of we may divide the first equation by and conclude that . The second equation then forces us to assume that and the third gives . Using the constraint again gives the critical points of .  Now that we have found all of the critical points of , we can ask if any of them are maxima or minima. In fact, in this case none of them are as can be arbitrarily large or small on the hyperboloid (check this!). One way to see the local behavior of on is to take the Hessian and restrict it to the tangent space of at the corresponding critical point. Recall that specifies the tangent space to at as the kernel of . It is left as an exercise to then see that the Hessian restricted to each tangent space gives a non-degenerate quadratic form (even though is degenerate on ) and is neither positive nor negative definite. Thus each of these critical points are saddle points.   "
},
{
  "id": "prop-lagrange-multipliers2",
  "level": "2",
  "url": "sec-optimization2.html#prop-lagrange-multipliers2",
  "type": "Proposition",
  "number": "1.7.11",
  "title": "Lagrange multipliers with several constraints.",
  "body": " Lagrange multipliers with several constraints   Suppose is an open set in , a differentiable vector valued function with of full rank and a differentiable scalar function. If is the level set of then a smooth point is a critical point of if and only if there are real numbers such that   "
},
{
  "id": "lem-kernelduals",
  "level": "2",
  "url": "sec-optimization2.html#lem-kernelduals",
  "type": "Lemma",
  "number": "1.7.12",
  "title": "",
  "body": "  If is a vector space over and are dual vectors, then if and only if there exists in with   "
},
{
  "id": "subsec-many-constraints-7",
  "level": "2",
  "url": "sec-optimization2.html#subsec-many-constraints-7",
  "type": "Example",
  "number": "1.7.13",
  "title": "Chain rule computation II.",
  "body": " Chain rule computation II   Recall that we may define the torus as In other words, if we take the vector valued function then is the level set . Now suppose we want to optimize on . We first note that is both closed (since it is given as the level set of a continuous function) and bounded, so the Extreme Value Theorem assures us that will achieve a maximum and minimum value. We apply our new technique by first computing derivatives Now, Lagrange's equation in this setting says that we must be able to find and so that Dividing by gives the more pleasant equation Now, if then the constraint implies and . On the other hand, if then and . But in this case we get that the constraint implies again, so the only values of for which exist are . A similar argument shows that exists only if is or . Thus the critical points of are A quick computation shows that the values of at these points is so that the maximum of on the torus is and the minimum is .   "
},
{
  "id": "exe-optimization2-1",
  "level": "2",
  "url": "sec-optimization2.html#exe-optimization2-1",
  "type": "Exercise",
  "number": "1.7.3.1",
  "title": "",
  "body": "Show that the following constrained spaces are smooth or identify points where they are not.   ,    ,      "
},
{
  "id": "exe-optimization2-2",
  "level": "2",
  "url": "sec-optimization2.html#exe-optimization2-2",
  "type": "Exercise",
  "number": "1.7.3.2",
  "title": "",
  "body": " If possible, optimize the function on   "
},
{
  "id": "exe-optimization2-3",
  "level": "2",
  "url": "sec-optimization2.html#exe-optimization2-3",
  "type": "Exercise",
  "number": "1.7.3.3",
  "title": "",
  "body": " If possible, optimize the function on   "
},
{
  "id": "exe-optimization2-4",
  "level": "2",
  "url": "sec-optimization2.html#exe-optimization2-4",
  "type": "Exercise",
  "number": "1.7.3.4",
  "title": "",
  "body": " Prove .  "
},
{
  "id": "sec-cubeintegration",
  "level": "1",
  "url": "sec-cubeintegration.html",
  "type": "Section",
  "number": "2.1",
  "title": "Integrating over cuboids in <span class=\"process-math\">\\(\\mathbb{R}^n\\)<\/span>",
  "body": " Integrating over cuboids in  Having explored derivatives, we now consider integrals in many dimensions. As in the case of derivatives, the domain on which we are defined (and integrating) can make a big difference in how easy or difficult it is to compute. We will give the general definition and then discuss rectangles in detail.     -dimensional cuboid    A cuboid  , or -cuboid, in is a product of intervals Alternatively, it can be described by the set of points which satisfy the inequalities    We now follow the procedure given in -dimension to define the multiple integral of a scalar function on the -cuboid Of course, as it has been some time since students may have seen this definition, let us make sure we all remember that the definite (Riemann) integral of a function of one variable is \\textit{not} the anti-derivative of said function. It is rather a limit of Riemann sums. Sadly, mimicking this definition in many dimensions introduces many indices, but outside of this messiness, the idea remains the same.  So proceeding as in dimension where we break our interval into several sub-intervals, we first break a cuboid into many sub-cuboids by defining a partition on . This can be done by simply breaking each interval into sub-intervals by considering a sequence Then to any multi-index with we have a sub-cuboid and these sub-cuboids have union equal to our original .  Note that the volume of one of these cuboids is just the product of the lengths of the sub-intervals We can picture this for a rectangle by simply drawing horizontal and vertical lines to divide the rectangle into smaller rectangles. For a -dimensional cuboid, the student should picture a cheese brick that is sliced along the three axes to make small cheese cuboids. Each would then be one of these cuboids (in the original large block). Now, just as in the one dimensional case, we need to choose sample points in our partitioned cuboids. For a given cuboid corresponding to the multi-index , denote this choice We write all of this information, the partition , the choice of sample points, as a single letter and build the Riemann sum  This sum will approximate the signed volume of the region under the graph of . As in the -variable case, we wish to define the integral as the actual volume which is a limit of such approximations as the partition becomes finer. The proper way to define this notion of finer partition is to define the norm of the partition  . Then we end up with the following definition of the multiple integral.     multiple integral    The multiple integral of a function on the cuboid is the limit if it exists. If the limit exists, we say that is integrable on .    Some words should be said on the meaning of the limit in this definition. What is meant here is that if we claim that is the integral, then for any there exists a for which implies . We also note that in two dimensions, this is called the double integral and in three dimensions is called the triple integral . In these cases, it is more common to write and  Now, these definitions are all well and good, but to understand these integrals, we need to establish some properties and computational techniques. We will begin with such a technique by understanding how to integrate out certain variables. Again let be a function on the cuboid . For any variable with we may define the cuboid in by omitting the -th variable (or equivalently projecting to the all coordinates except ). I.e. take We take to be the cuboid in all dimensions except the -th dimensions. In the case of we obtain a single point which we consider to be the zero dimensional cuboid. Then we make the definition:     Integral of with respect to the -th variable    Let be defined on the -cuboid . The integral of with respect to the -th variable is the function on the -cuboid . We say that is integrable with respect to if the integral of with respect to the -th variable exists.    In the previous definition, we use the variable to emphasize that it is the -th variable that is being integrated. However, no matter which variable is chosen, it is simply a -variable integral and, for many basic functions, is easily computable.   Integrating with respect to a variable in two dimensions   Let be defined on the rectangle . We may integrate with respect to and obtain The attentive student will observe that in the second to last line of the equation, we write instead of just in the subscript. While not completely necessary, it is good form and will help you avoid mixing up coordinates as you compute more complicated integrals.    When integrating out one of the variables in a function, one treats the remaining variables as constants. This is similar to the way we compute partial derivatives. Let us go through another example where this is illustrated.   Integrating with respect to a variable in three dimensions   Let be defined on the box . We integrate this time with respect to and obtain    Now, what one can do once, one (usually) can do again and again.     Iterated integral    An iterated integral of on is the value of for some ordered sequence of variables . We say that has all iterated integrals the iterated integral exists for every ordered sequence of variables.    The key thing to remember about iterated integrals is that they are computational in nature. We can see this by completing an iterated integral from .   Iterated integral computation I   There we had on the rectangle . Then using our previous computation, we compute the iterated integral Note that we can also compute the other iterated integral We clearly see, perhaps surprisingly, that these two different computations yield the same result. More on this in a moment.    There are instances when one can make quick work of an iterated integral computation. One case of this is if the integrand (which is the function to be integrated) is a product of functions of the variables. In particular, if are integrable functions and then This holds regardless of the order of integration that we choose.   Iterated integral computation II   Let and observe that    The reason we say an iterated instead of the iterated integral is that, for several strange functions, the order in which one iterates matters. Let's see a simple an example of this.   Non-commuting order of integration   Let us define subsets and of the rectangle . The subset consists of points where and is irrational and the subset of points where and is rational. Define the function Then the integrating with respect to gives the constant function so that the iterated integral On the other hand, there is not a single value of for which is integrable with respect to . It is also the case that is not integrable on (i.e. the double integral of does not exist).  In fact, this example is more of a symptom of the fact that we are using the Riemann integral rather than the Lebesgue integral (which will be developed in your next real analysis course) - but there are several examples in both cases showing that iterated integrals often depend on the choice of ordering.    Happily, there are many cases where such an order does not matter and, moreover, where the iterated integral actually equals the multiple integral. This is the content of the next theorem, whose importance cannot be overestimated.   Fubini   Suppose is a bounded function on which has all iterated integrals. Then for any ordering of variables we have     The proof of this theorem will be deferred to a real analysis course, where it is better stated in terms of Lesbegue integrals (although the results for Riemann integrals can be found in Calculus on manifolds by Spivak). In fact, the condition that be bounded with all iterated integrals can be changed to being integrable on . However, this latter condition may not be something that is as easily known or checked without more tools. One thing that does follow from this is the following corollary.   Continuous functions on are integrable on cubiods.   Let us now compute one more example.   Integral in two dimensions   It is well known that computing the integral of a one variable function gives the (signed) area under the graph of the function. Similarly, the (signed) volume under the graph of a two variable function is computed by a double integral. With this in mind, we consider finding the volume above the square and below the paraboloid . To do this, we take the paraboloid as the graph of So the desired volume is Noting that is continuous, using Fubini's Theorem, we can make this computation with iterated integrals      Suppose are two integrable functions on . Show that     Define the function to be away from the origin and at the origin. In fact, is integrable on the square . Is it integrable with respect to or ? Explain your answer.    Let and . Calculate the integral of with respect to the variables and as functions of , and respectively.   Compute the following multiple integrals.           where .    Let be a continuous function on the unit ball If we take to be the function on the cuboid which is on and off of , show that is integrable on .    "
},
{
  "id": "def-cube",
  "level": "2",
  "url": "sec-cubeintegration.html#def-cube",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "   -dimensional cuboid    A cuboid  , or -cuboid, in is a product of intervals Alternatively, it can be described by the set of points which satisfy the inequalities   "
},
{
  "id": "sec-cubeintegration-6",
  "level": "2",
  "url": "sec-cubeintegration.html#sec-cubeintegration-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Riemann sum norm of the partition "
},
{
  "id": "def-multipleintegral",
  "level": "2",
  "url": "sec-cubeintegration.html#def-multipleintegral",
  "type": "Definition",
  "number": "2.1.2",
  "title": "",
  "body": "   multiple integral    The multiple integral of a function on the cuboid is the limit if it exists. If the limit exists, we say that is integrable on .   "
},
{
  "id": "sec-cubeintegration-8",
  "level": "2",
  "url": "sec-cubeintegration.html#sec-cubeintegration-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "double integral triple integral "
},
{
  "id": "def-integrating-variables",
  "level": "2",
  "url": "sec-cubeintegration.html#def-integrating-variables",
  "type": "Definition",
  "number": "2.1.3",
  "title": "",
  "body": "   Integral of with respect to the -th variable    Let be defined on the -cuboid . The integral of with respect to the -th variable is the function on the -cuboid . We say that is integrable with respect to if the integral of with respect to the -th variable exists.   "
},
{
  "id": "ex-integral1",
  "level": "2",
  "url": "sec-cubeintegration.html#ex-integral1",
  "type": "Example",
  "number": "2.1.4",
  "title": "Integrating with respect to a variable in two dimensions.",
  "body": " Integrating with respect to a variable in two dimensions   Let be defined on the rectangle . We may integrate with respect to and obtain The attentive student will observe that in the second to last line of the equation, we write instead of just in the subscript. While not completely necessary, it is good form and will help you avoid mixing up coordinates as you compute more complicated integrals.   "
},
{
  "id": "sec-cubeintegration-14",
  "level": "2",
  "url": "sec-cubeintegration.html#sec-cubeintegration-14",
  "type": "Example",
  "number": "2.1.5",
  "title": "Integrating with respect to a variable in three dimensions.",
  "body": " Integrating with respect to a variable in three dimensions   Let be defined on the box . We integrate this time with respect to and obtain   "
},
{
  "id": "def-iterated-integral",
  "level": "2",
  "url": "sec-cubeintegration.html#def-iterated-integral",
  "type": "Definition",
  "number": "2.1.6",
  "title": "",
  "body": "   Iterated integral    An iterated integral of on is the value of for some ordered sequence of variables . We say that has all iterated integrals the iterated integral exists for every ordered sequence of variables.   "
},
{
  "id": "sec-cubeintegration-18",
  "level": "2",
  "url": "sec-cubeintegration.html#sec-cubeintegration-18",
  "type": "Example",
  "number": "2.1.7",
  "title": "Iterated integral computation I.",
  "body": " Iterated integral computation I   There we had on the rectangle . Then using our previous computation, we compute the iterated integral Note that we can also compute the other iterated integral We clearly see, perhaps surprisingly, that these two different computations yield the same result. More on this in a moment.   "
},
{
  "id": "sec-cubeintegration-20",
  "level": "2",
  "url": "sec-cubeintegration.html#sec-cubeintegration-20",
  "type": "Example",
  "number": "2.1.8",
  "title": "Iterated integral computation II.",
  "body": " Iterated integral computation II   Let and observe that   "
},
{
  "id": "sec-cubeintegration-22",
  "level": "2",
  "url": "sec-cubeintegration.html#sec-cubeintegration-22",
  "type": "Example",
  "number": "2.1.9",
  "title": "Non-commuting order of integration.",
  "body": " Non-commuting order of integration   Let us define subsets and of the rectangle . The subset consists of points where and is irrational and the subset of points where and is rational. Define the function Then the integrating with respect to gives the constant function so that the iterated integral On the other hand, there is not a single value of for which is integrable with respect to . It is also the case that is not integrable on (i.e. the double integral of does not exist).  In fact, this example is more of a symptom of the fact that we are using the Riemann integral rather than the Lebesgue integral (which will be developed in your next real analysis course) - but there are several examples in both cases showing that iterated integrals often depend on the choice of ordering.   "
},
{
  "id": "thm-fubini",
  "level": "2",
  "url": "sec-cubeintegration.html#thm-fubini",
  "type": "Theorem",
  "number": "2.1.10",
  "title": "Fubini.",
  "body": " Fubini   Suppose is a bounded function on which has all iterated integrals. Then for any ordering of variables we have    "
},
{
  "id": "sec-cubeintegration-26",
  "level": "2",
  "url": "sec-cubeintegration.html#sec-cubeintegration-26",
  "type": "Corollary",
  "number": "2.1.11",
  "title": "",
  "body": " Continuous functions on are integrable on cubiods.  "
},
{
  "id": "sec-cubeintegration-28",
  "level": "2",
  "url": "sec-cubeintegration.html#sec-cubeintegration-28",
  "type": "Example",
  "number": "2.1.12",
  "title": "Integral in two dimensions.",
  "body": " Integral in two dimensions   It is well known that computing the integral of a one variable function gives the (signed) area under the graph of the function. Similarly, the (signed) volume under the graph of a two variable function is computed by a double integral. With this in mind, we consider finding the volume above the square and below the paraboloid . To do this, we take the paraboloid as the graph of So the desired volume is Noting that is continuous, using Fubini's Theorem, we can make this computation with iterated integrals   "
},
{
  "id": "exe-cubeintegration-1",
  "level": "2",
  "url": "sec-cubeintegration.html#exe-cubeintegration-1",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "",
  "body": " Suppose are two integrable functions on . Show that   "
},
{
  "id": "exe-cubeintegration-2",
  "level": "2",
  "url": "sec-cubeintegration.html#exe-cubeintegration-2",
  "type": "Exercise",
  "number": "2.1.2",
  "title": "",
  "body": " Define the function to be away from the origin and at the origin. In fact, is integrable on the square . Is it integrable with respect to or ? Explain your answer.  "
},
{
  "id": "exe-cubeintegration-3",
  "level": "2",
  "url": "sec-cubeintegration.html#exe-cubeintegration-3",
  "type": "Exercise",
  "number": "2.1.3",
  "title": "",
  "body": " Let and . Calculate the integral of with respect to the variables and as functions of , and respectively.  "
},
{
  "id": "exe-cubeintegration-4",
  "level": "2",
  "url": "sec-cubeintegration.html#exe-cubeintegration-4",
  "type": "Exercise",
  "number": "2.1.4",
  "title": "",
  "body": "Compute the following multiple integrals.           where .  "
},
{
  "id": "exe-cubeintegration-5",
  "level": "2",
  "url": "sec-cubeintegration.html#exe-cubeintegration-5",
  "type": "Exercise",
  "number": "2.1.5",
  "title": "",
  "body": " Let be a continuous function on the unit ball If we take to be the function on the cuboid which is on and off of , show that is integrable on .  "
},
{
  "id": "sec-compactintegration",
  "level": "1",
  "url": "sec-compactintegration.html",
  "type": "Section",
  "number": "2.2",
  "title": "Integration over compact domains in <span class=\"process-math\">\\(\\mathbb{R}^2\\)<\/span>",
  "body": " Integration over compact domains in  In this section, we will integrate a function over a nice domain in . We will start by giving the general definition and then discuss a variety of specific cases and techniques.  Let be a closed and bounded domain in . Then, since it is bounded, it is contained in a cuboid . Now suppose is a continuous function on . At the moment, it does not make sense to integrate over the domain , because we have only defined such integrals over cuboids and is not defined for points not in . To make sense of such a concept then, we extend our function to all of by taking  Then we obtain the definition.     Integral over domain     The (multiple) integral of over is given by    One concern a student may have is whether is integrable.    If is a compact domain in with smooth boundary and is continuous on , then the multiple integral exists.    We will leave the proof of this result to an analysis course and continue by developing computational techniques. First, we make the following note which can be considered a definition or a proposition (depending on the domain and perspective).     Volume of     The -dimensional volume of a compact domain is    This works fine as a definition for many domains, but one may wish to verify that indeed this agrees with the formulas of area and volume of familiar regions and solid bodies for which we are familiar. We will indeed do this as we develop more techniques.  In order to compute the integral over , we will need a nice way of describing the domain itself. Putting aside the integrand for the moment, we focus on domains in the plane of a particular type.     Bounded by continuous graphs of     A compact domain in is bounded by continuous graphs of if there is an interval and continuous functions for which The domain is \\textbf{bounded by continuous graphs of } if there is an interval and continuous functions for which    In some texts is a called a Type I or Type II domain in . There are sets which are bounded by continuous functions with respect to either variable, both variables or neither variable. Let us take a look at examples of these possibilities.   Describing a domain bounded by continuous graphs I   Consider the domain bounded by the ellipse In this case, is of both types. Indeed, we can write as satisfying the inequalities On the other hand, we can bound this by continuous graphs of by taking the bounds     Describing a domain bounded by continuous graphs II   Consider the domain which consists of all points in the square except those with coordinate greater than . This can be described as a domain bounded by continuous graphs of by taking However, there is no way to write this domain as being bounded by two graphs in . This is because there are two connected intervals in the intersection of horizontal lines and when is between and . Moreover, if we reflect over the line, it becomes impossible to describe it as being bounded by graphs in .     Describing a domain bounded by continuous graphs III   Consider all the points in the square which do not lie in the open unit disc . This domain is of neither type since the and axes intersect the domain in multiple intervals.    The reason to introduce such domains is that they are very well suited to applying Fubini's Theorem.   Fubini for domains bounded by continuous graphs   If is a domain bounded by continuous graphs of through the inequalities and is a continuous function on then If is a domain bounded by continuous graphs of through the inequalities and is a continuous function on then    This theorem follows directly from the definition of integrals over compact domains, the description of the domain , and Fubini's Theorem. Notice that, once the domain is described as one type, we lose the ability to switch the order of integration. It is thus paramount that we pay close attention to which variable we integrate first when applying this theorem. We now work through a few examples.   Fubini for bounded domains I   We start with an example that we will reexamine with other techniques later on. Let us find the area of the disc of radius . Of course, we all know from elementary school (or -variable calculus) that this is , but now we can compute it with a multiple integral. For this, we describe the disc using the inequalities Then we are expressing as a region bounded by graphs of with bounding functions are and . To find the area we apply our theorem, a trigonometric -substitution, and compute    Notice in this last example we had a choice since the disc is both Type I and II.   Fubini for bounded domains II   Suppose is the domain between the -axis and the parabola . We compute the double integral To do this, we check to see that can be described as To see this, it is helpful to find the points of intersections of the curve and the -axis. Then      Give an example of two functions and so that the domain of points between them is not a domain bounded by two continuous graphs of .    Let be the domain between the -axis, the line , the curve and the -axis. Compute the double integral     Let be the region specified by Find the volume of the region above the -plane and below the graph of the linear function .    Let be the annulus of points between the disc of radius and radius . Calculate     Let be the -dimensional simplex which has vertices at the origin, , , and for and positive. Find the volume of using a double integral.    "
},
{
  "id": "def-",
  "level": "2",
  "url": "sec-compactintegration.html#def-",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "   Integral over domain     The (multiple) integral of over is given by   "
},
{
  "id": "prop-continuous-integrable",
  "level": "2",
  "url": "sec-compactintegration.html#prop-continuous-integrable",
  "type": "Proposition",
  "number": "2.2.2",
  "title": "",
  "body": "  If is a compact domain in with smooth boundary and is continuous on , then the multiple integral exists.   "
},
{
  "id": "def-volume",
  "level": "2",
  "url": "sec-compactintegration.html#def-volume",
  "type": "Definition",
  "number": "2.2.3",
  "title": "",
  "body": "   Volume of     The -dimensional volume of a compact domain is   "
},
{
  "id": "def-boundedbygraphs",
  "level": "2",
  "url": "sec-compactintegration.html#def-boundedbygraphs",
  "type": "Definition",
  "number": "2.2.4",
  "title": "",
  "body": "   Bounded by continuous graphs of     A compact domain in is bounded by continuous graphs of if there is an interval and continuous functions for which The domain is \\textbf{bounded by continuous graphs of } if there is an interval and continuous functions for which   "
},
{
  "id": "sec-compactintegration-13",
  "level": "2",
  "url": "sec-compactintegration.html#sec-compactintegration-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Type I Type II "
},
{
  "id": "sec-compactintegration-14",
  "level": "2",
  "url": "sec-compactintegration.html#sec-compactintegration-14",
  "type": "Example",
  "number": "2.2.5",
  "title": "Describing a domain bounded by continuous graphs I.",
  "body": " Describing a domain bounded by continuous graphs I   Consider the domain bounded by the ellipse In this case, is of both types. Indeed, we can write as satisfying the inequalities On the other hand, we can bound this by continuous graphs of by taking the bounds   "
},
{
  "id": "sec-compactintegration-15",
  "level": "2",
  "url": "sec-compactintegration.html#sec-compactintegration-15",
  "type": "Example",
  "number": "2.2.6",
  "title": "Describing a domain bounded by continuous graphs II.",
  "body": " Describing a domain bounded by continuous graphs II   Consider the domain which consists of all points in the square except those with coordinate greater than . This can be described as a domain bounded by continuous graphs of by taking However, there is no way to write this domain as being bounded by two graphs in . This is because there are two connected intervals in the intersection of horizontal lines and when is between and . Moreover, if we reflect over the line, it becomes impossible to describe it as being bounded by graphs in .   "
},
{
  "id": "sec-compactintegration-16",
  "level": "2",
  "url": "sec-compactintegration.html#sec-compactintegration-16",
  "type": "Example",
  "number": "2.2.7",
  "title": "Describing a domain bounded by continuous graphs III.",
  "body": " Describing a domain bounded by continuous graphs III   Consider all the points in the square which do not lie in the open unit disc . This domain is of neither type since the and axes intersect the domain in multiple intervals.   "
},
{
  "id": "thm-Fubinibounded",
  "level": "2",
  "url": "sec-compactintegration.html#thm-Fubinibounded",
  "type": "Theorem",
  "number": "2.2.8",
  "title": "Fubini for domains bounded by continuous graphs.",
  "body": " Fubini for domains bounded by continuous graphs   If is a domain bounded by continuous graphs of through the inequalities and is a continuous function on then If is a domain bounded by continuous graphs of through the inequalities and is a continuous function on then   "
},
{
  "id": "ex-areaofdisc",
  "level": "2",
  "url": "sec-compactintegration.html#ex-areaofdisc",
  "type": "Example",
  "number": "2.2.9",
  "title": "Fubini for bounded domains I.",
  "body": " Fubini for bounded domains I   We start with an example that we will reexamine with other techniques later on. Let us find the area of the disc of radius . Of course, we all know from elementary school (or -variable calculus) that this is , but now we can compute it with a multiple integral. For this, we describe the disc using the inequalities Then we are expressing as a region bounded by graphs of with bounding functions are and . To find the area we apply our theorem, a trigonometric -substitution, and compute   "
},
{
  "id": "sec-compactintegration-22",
  "level": "2",
  "url": "sec-compactintegration.html#sec-compactintegration-22",
  "type": "Example",
  "number": "2.2.10",
  "title": "Fubini for bounded domains II.",
  "body": " Fubini for bounded domains II   Suppose is the domain between the -axis and the parabola . We compute the double integral To do this, we check to see that can be described as To see this, it is helpful to find the points of intersections of the curve and the -axis. Then   "
},
{
  "id": "exe-compactintegration-1",
  "level": "2",
  "url": "sec-compactintegration.html#exe-compactintegration-1",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "",
  "body": " Give an example of two functions and so that the domain of points between them is not a domain bounded by two continuous graphs of .  "
},
{
  "id": "exe-compactintegration-2",
  "level": "2",
  "url": "sec-compactintegration.html#exe-compactintegration-2",
  "type": "Exercise",
  "number": "2.2.2",
  "title": "",
  "body": " Let be the domain between the -axis, the line , the curve and the -axis. Compute the double integral   "
},
{
  "id": "exe-compactintegration-3",
  "level": "2",
  "url": "sec-compactintegration.html#exe-compactintegration-3",
  "type": "Exercise",
  "number": "2.2.3",
  "title": "",
  "body": " Let be the region specified by Find the volume of the region above the -plane and below the graph of the linear function .  "
},
{
  "id": "exe-compactintegration-4",
  "level": "2",
  "url": "sec-compactintegration.html#exe-compactintegration-4",
  "type": "Exercise",
  "number": "2.2.4",
  "title": "",
  "body": " Let be the annulus of points between the disc of radius and radius . Calculate   "
},
{
  "id": "exe-compactintegration-5",
  "level": "2",
  "url": "sec-compactintegration.html#exe-compactintegration-5",
  "type": "Exercise",
  "number": "2.2.5",
  "title": "",
  "body": " Let be the -dimensional simplex which has vertices at the origin, , , and for and positive. Find the volume of using a double integral.  "
},
{
  "id": "sec-compactRnintegration",
  "level": "1",
  "url": "sec-compactRnintegration.html",
  "type": "Section",
  "number": "2.3",
  "title": "Integration over compact domains in <span class=\"process-math\">\\(\\mathbb{R}^n\\)<\/span>",
  "body": " Integration over compact domains in  In this section, we extend the techniques established for integrating in to -dimensional space. We start by extending to higher dimensions.     Domain bounded by continuous graphs in     A compact domain in is bounded by continuous graphs of if there is a compact domain in and continuous functions for which    Again we may use this to compute multiple integrals.    If is a domain bounded by continuous graphs of so that and is a continuous function on then    Notice that in this theorem, we are obtaining a recursive procedure for computing a multiple integral. We start with a multiple integral over an -dimensional domain and produce a multiple over an -dimensional domain. Repeating this procedure will, in principle, allow one to compute the original multiple integral (assuming we do not hit a truly difficult integral!). Let us consider a few examples and then make some philosophical and practical comments!     Let's verify that the volume of a three dimensional ball of radius is indeed what we think it is. Here can be rewritten as where is the disc of radius . Applying our theorem then gives We have now reduced a triple integral to a double integral and can continue using methods from last section and a -substitution . To save some space, we write and see    Before computing another example, we mention one of the chief applications.     center of mass    Let be a compact domain in and a non-negative density function. The center of mass of with respect to is the point where If is a constant function we call the centroid of the domain .    This physical concept also has a very important statistical and probabilistic interpretation. This occurs when is a probability density function. Here we do not need to assume that is compact. The idea of such a function is that it measures the likelihood of an event occurring in a certain set. The rules for a function to qualify as a probability density function are simple and we'll write them as a definition.     probability density    Given a region in , a function is a probability density if   takes only non-negative values,   is integrable on and     For example, if is a disc in and we are throwing darts at this disc, there may be a distribution which tells us the probability that the dart will hit in a certain domain. I.e. if is some subset of , we determine From this perspective, the notion of the center of mass becomes the expected value  of the associated probability.   Computing a centroid   Let us find the centroid of the upper half unit ball given by inequalities First note that the coordinates and are both . This can be seen by observing that is symmetric about the and planes (and the integrand in the coordinates are odd with respect to and respectively). To find we use that the volume of is , take to be the unit disc, and compute the integral Performing a substitution and using the double angle formula (twice) gives Thus and the centroid is      Using multiple integrals, show that the volume of a cylinder of height and radius is (you may use the fact that the area of a disc of radius is ).    Suppose is the domain in the positive octant (the subspace of where all coordinates are non-negative) and whose points are distance at most from the origin. Compute    The polydisc in is the product of two discs . Suppose has radius and has radius , compute the -dimensional volume of in terms of and .  If time is money, it pays to be clever here.   Let be the -simplex which is given by the inequalities Find the centroid of .  Note that by symmetry, all three coordinates of the centroid must be equal.   "
},
{
  "id": "def-bounded-by-graphs-inRn",
  "level": "2",
  "url": "sec-compactRnintegration.html#def-bounded-by-graphs-inRn",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": "   Domain bounded by continuous graphs in     A compact domain in is bounded by continuous graphs of if there is a compact domain in and continuous functions for which   "
},
{
  "id": "thm-iterated-Rn",
  "level": "2",
  "url": "sec-compactRnintegration.html#thm-iterated-Rn",
  "type": "Theorem",
  "number": "2.3.2",
  "title": "",
  "body": "  If is a domain bounded by continuous graphs of so that and is a continuous function on then   "
},
{
  "id": "ex-ballvol",
  "level": "2",
  "url": "sec-compactRnintegration.html#ex-ballvol",
  "type": "Example",
  "number": "2.3.3",
  "title": ".",
  "body": "   Let's verify that the volume of a three dimensional ball of radius is indeed what we think it is. Here can be rewritten as where is the disc of radius . Applying our theorem then gives We have now reduced a triple integral to a double integral and can continue using methods from last section and a -substitution . To save some space, we write and see   "
},
{
  "id": "def-centroid",
  "level": "2",
  "url": "sec-compactRnintegration.html#def-centroid",
  "type": "Definition",
  "number": "2.3.4",
  "title": "",
  "body": "   center of mass    Let be a compact domain in and a non-negative density function. The center of mass of with respect to is the point where If is a constant function we call the centroid of the domain .   "
},
{
  "id": "def-probdensity",
  "level": "2",
  "url": "sec-compactRnintegration.html#def-probdensity",
  "type": "Definition",
  "number": "2.3.5",
  "title": "",
  "body": "   probability density    Given a region in , a function is a probability density if   takes only non-negative values,   is integrable on and    "
},
{
  "id": "sec-compactRnintegration-12",
  "level": "2",
  "url": "sec-compactRnintegration.html#sec-compactRnintegration-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "expected value "
},
{
  "id": "sec-compactRnintegration-13",
  "level": "2",
  "url": "sec-compactRnintegration.html#sec-compactRnintegration-13",
  "type": "Example",
  "number": "2.3.6",
  "title": "Computing a centroid.",
  "body": " Computing a centroid   Let us find the centroid of the upper half unit ball given by inequalities First note that the coordinates and are both . This can be seen by observing that is symmetric about the and planes (and the integrand in the coordinates are odd with respect to and respectively). To find we use that the volume of is , take to be the unit disc, and compute the integral Performing a substitution and using the double angle formula (twice) gives Thus and the centroid is   "
},
{
  "id": "exe-compactRnintegration-1",
  "level": "2",
  "url": "sec-compactRnintegration.html#exe-compactRnintegration-1",
  "type": "Exercise",
  "number": "2.3.1",
  "title": "",
  "body": " Using multiple integrals, show that the volume of a cylinder of height and radius is (you may use the fact that the area of a disc of radius is ).  "
},
{
  "id": "exe-compactRnintegration-2",
  "level": "2",
  "url": "sec-compactRnintegration.html#exe-compactRnintegration-2",
  "type": "Exercise",
  "number": "2.3.2",
  "title": "",
  "body": " Suppose is the domain in the positive octant (the subspace of where all coordinates are non-negative) and whose points are distance at most from the origin. Compute  "
},
{
  "id": "exe-compactRnintegration-3",
  "level": "2",
  "url": "sec-compactRnintegration.html#exe-compactRnintegration-3",
  "type": "Exercise",
  "number": "2.3.3",
  "title": "",
  "body": " The polydisc in is the product of two discs . Suppose has radius and has radius , compute the -dimensional volume of in terms of and .  If time is money, it pays to be clever here. "
},
{
  "id": "exe-compactRnintegration-4",
  "level": "2",
  "url": "sec-compactRnintegration.html#exe-compactRnintegration-4",
  "type": "Exercise",
  "number": "2.3.4",
  "title": "",
  "body": " Let be the -simplex which is given by the inequalities Find the centroid of .  Note that by symmetry, all three coordinates of the centroid must be equal. "
},
{
  "id": "sec-cov",
  "level": "1",
  "url": "sec-cov.html",
  "type": "Section",
  "number": "2.4",
  "title": "Change of Variables",
  "body": " Change of Variables   When a student looks over the integrals of the past two sections, they will notice a truly disturbing trend - these computations are taking more and more of the page - they are becoming quite complicated at a computational level, even though the abstract ideas are not. This trend does not bode well for more difficult integrals that we may experience, but as it turns out, there is a stunning theorem that, in many important situations, comes to our rescue.   Change of Variables   Let be a compact domain in with coordinates , a compact domain in with coordinates and a differentiable one-to-one correspondence with invertible derivative at every point of the interior of . Suppose is an integrable function on then    Our first observation which does require a bit of work is that one can work with curved partitions in Riemann sums rather than the straight ones given in . In particular, if we take an ordinary partition on with cuboids then, because is a continuous one-to-one correspondence, we will obtain a curved partition on consisting of `curved cuboids' . Of course, choosing sample points in gives a choice of sample points in the curved cuboids of . This assignment of partition with sample points in to curved partitions with sample points is in a sense continuous. More precisely, if one defines the diameter of a region as the maximal distance between two points, then an alternative definition of the norm of a partition is the maximal diameter of any cuboid in the partition. The advantage of this version of norm is that it can be extended to curved partitions and we can then use the compactness of and the continuity of to show that, as tends to zero, so does . With this in mind, the first observation is that, if is integrable, then rather than using our cubical partitions on , we may used curved partitions coming from in the definition of the definite integral. For this, we take the Riemann sums and obtain the modified, but equivalent, definition One notes that in the new Riemann sums, the nice formula for is gone and we have this fairly large question mark hovering over This is precisely where our definition of the derivative and linear algebra come in to play. Using the definition of the derivative and compactness of , with some work one can show that, for every , there exist so that if the norm then there exist parallelepipeds and for every -cuboid indexed by in satisfying  The parallelepipeds are -close to the partitioned cuboid with respect to volume. Precisely, we mean that and where we recall .  If is the linear approximation of at then  While showing such exist may require some work, the student should keep in mind that the idea behind this work is that the derivative does a good job approximating near a point. So close to a point, looks like the linear approximation and, if we had equality, we could take any and let and both equal the cuboid .  Now, letting to save space, using the fact that the absolute value of the determinant gives the change in volume and the definition of the linear approximations, we see that Using property (2) we then have Applying property (1) then gives Thus, for all partitions with we have both the left and right inequality. Neglecting the factors for a moment and summing the terms over all , while multiplying by as we go gives for the left and right hand sides while the middle is the Riemann sum of the curved partition Putting the terms in then gives us that The limit of the Riemann sum on either side (neglecting factor) is And as was discussed in the first part of the sketch, equation gives the limit as of the middle term as As inequalilty holds for all Riemann sums with norm less than , we may let tend to zero giving us the desired equality in equation .    Before explaining the ideas behind this theorem, we make some comments regarding notation. First, instead of using the total derivative of , the absolute value of the determinant of the Jacobian matrix is sometimes written rather than . In fact, often the function is written in terms of the coordinate function as With this notation, you may also write for (or ). Then the equation in the theorem reads equals While slightly longer, this expression can be helpful in keeping track of which variables to use in which integral. Another way of thinking about this that we will return to later is by considering that the integral on the domain is pulled back to an integral on via .  In these notes we only sketched the proof of the change of variables theorem, leaving the full proof for a real analysis course to come. The important conceptual ingredients we called upon are two key pieces of knowledge gained in this course. One being that the absolute value of the determinant of a linear transformation from an inner product space to itself measures the change in volume, and the other that the derivative of a function gives a good linear approximation to the function.  Now that we have this result, we can move forward and use it. The applications are vast...    Integration using polar coordinates  One important change of variables that we have seen early on was the function We have computed the derivative of this change of variables many times and found It is easy enough to take determinants here to see Thus a factor of appears in the integral when integrating with respect to polar coordinates. Indeed, when changing variables to polar coordinates, students are told to remember that Let's revisit some prior problems with our new tool.   Polar integrals   In , we computed the area of a disc of radius . It was a rather tedious computation due to the trigonometric change of variable that was needed. Let's try it again in polar coordinates. Here we need to use only on the rectangle Then our change of variables formula reads Hopefully a student can see the improvement! Now what about finding the volume of a ball of radius as in ? Well, there we made the computation and continued with a nasty looking double integration. But if we use change of variables (on the same domain as above) we can simply continue with Again the computation is shorter and much less complicated. The unconvinced student should try finding the centroid of the upper half ball using polar coordinates as another convincing example.    One aspect of changing variables that is of great importance and often neglected by the student eager to compute is that we must pay close attention to the function and its domain. We must be absolutely sure that it is a one-to-one correspondence (at least away from the boundaries of and ). One also needs to make certain that they are in fact simplifying the integral with their change of variables. It is quite easy to make things more difficult if the integrand or domain of integration does not have good properties. One basic thing to hope for is that the domain of is an -cuboid (which are usually easier to integrate over).  For students still unconvinced about polar coordinates, I offer up an improper integral computation.   Normalization factor of standard normal distribution   We have mentioned the (univariate) normal distribution previously in these notes (in particular when discussing quadratic forms). Such a distribution with mean at the origin and standard deviation is given by a probability density function on which has the form By , for this to be a probability density function, we must have that However, it would take a cruel person to ask a first year calculus student to compute this integral because it is impossible to solve with one variable techniques (so far as I am aware). We can though use a change of variables and a little trickery! Just compute the square instead to see... So that and       Compute the centroid of the region between the paraboloid and the plane .   Let be the triangle in the plane whose vertices are the points , and .  Find a linear transformation which maps the triangle with vertices , and to .   What is the determinant of the Jacobian of your transformation?   Compute     Let be a cone in with base in the plane and apex point at . Show that the volume of is the same as the volume of any other cone with base and apex point .   Recall that spherical coordinates are given by the change of variables  Compute the determinant of the Jacobian of .   What domain should be used if we would like to parameterize the ball of radius ?   Use a change of variables to compute the volume of the ball of radius .   Consider the change of variables  Compute the determinant of the Jacobian of .   What domain should be used if we would like to parameterize the -dimensional ball of radius centered at the origin?   Compute the volume of the -dimensional ball of radius .    "
},
{
  "id": "thm-change-of-variables",
  "level": "2",
  "url": "sec-cov.html#thm-change-of-variables",
  "type": "Theorem",
  "number": "2.4.1",
  "title": "Change of Variables.",
  "body": " Change of Variables   Let be a compact domain in with coordinates , a compact domain in with coordinates and a differentiable one-to-one correspondence with invertible derivative at every point of the interior of . Suppose is an integrable function on then    Our first observation which does require a bit of work is that one can work with curved partitions in Riemann sums rather than the straight ones given in . In particular, if we take an ordinary partition on with cuboids then, because is a continuous one-to-one correspondence, we will obtain a curved partition on consisting of `curved cuboids' . Of course, choosing sample points in gives a choice of sample points in the curved cuboids of . This assignment of partition with sample points in to curved partitions with sample points is in a sense continuous. More precisely, if one defines the diameter of a region as the maximal distance between two points, then an alternative definition of the norm of a partition is the maximal diameter of any cuboid in the partition. The advantage of this version of norm is that it can be extended to curved partitions and we can then use the compactness of and the continuity of to show that, as tends to zero, so does . With this in mind, the first observation is that, if is integrable, then rather than using our cubical partitions on , we may used curved partitions coming from in the definition of the definite integral. For this, we take the Riemann sums and obtain the modified, but equivalent, definition One notes that in the new Riemann sums, the nice formula for is gone and we have this fairly large question mark hovering over This is precisely where our definition of the derivative and linear algebra come in to play. Using the definition of the derivative and compactness of , with some work one can show that, for every , there exist so that if the norm then there exist parallelepipeds and for every -cuboid indexed by in satisfying  The parallelepipeds are -close to the partitioned cuboid with respect to volume. Precisely, we mean that and where we recall .  If is the linear approximation of at then  While showing such exist may require some work, the student should keep in mind that the idea behind this work is that the derivative does a good job approximating near a point. So close to a point, looks like the linear approximation and, if we had equality, we could take any and let and both equal the cuboid .  Now, letting to save space, using the fact that the absolute value of the determinant gives the change in volume and the definition of the linear approximations, we see that Using property (2) we then have Applying property (1) then gives Thus, for all partitions with we have both the left and right inequality. Neglecting the factors for a moment and summing the terms over all , while multiplying by as we go gives for the left and right hand sides while the middle is the Riemann sum of the curved partition Putting the terms in then gives us that The limit of the Riemann sum on either side (neglecting factor) is And as was discussed in the first part of the sketch, equation gives the limit as of the middle term as As inequalilty holds for all Riemann sums with norm less than , we may let tend to zero giving us the desired equality in equation .   "
},
{
  "id": "subsec-polar-integration-3",
  "level": "2",
  "url": "sec-cov.html#subsec-polar-integration-3",
  "type": "Example",
  "number": "2.4.2",
  "title": "Polar integrals.",
  "body": " Polar integrals   In , we computed the area of a disc of radius . It was a rather tedious computation due to the trigonometric change of variable that was needed. Let's try it again in polar coordinates. Here we need to use only on the rectangle Then our change of variables formula reads Hopefully a student can see the improvement! Now what about finding the volume of a ball of radius as in ? Well, there we made the computation and continued with a nasty looking double integration. But if we use change of variables (on the same domain as above) we can simply continue with Again the computation is shorter and much less complicated. The unconvinced student should try finding the centroid of the upper half ball using polar coordinates as another convincing example.   "
},
{
  "id": "subsec-polar-integration-6",
  "level": "2",
  "url": "sec-cov.html#subsec-polar-integration-6",
  "type": "Example",
  "number": "2.4.3",
  "title": "Normalization factor of standard normal distribution.",
  "body": " Normalization factor of standard normal distribution   We have mentioned the (univariate) normal distribution previously in these notes (in particular when discussing quadratic forms). Such a distribution with mean at the origin and standard deviation is given by a probability density function on which has the form By , for this to be a probability density function, we must have that However, it would take a cruel person to ask a first year calculus student to compute this integral because it is impossible to solve with one variable techniques (so far as I am aware). We can though use a change of variables and a little trickery! Just compute the square instead to see... So that and   "
},
{
  "id": "exe-cov-1",
  "level": "2",
  "url": "sec-cov.html#exe-cov-1",
  "type": "Exercise",
  "number": "2.4.2.1",
  "title": "",
  "body": " Compute the centroid of the region between the paraboloid and the plane .  "
},
{
  "id": "exe-cov-2",
  "level": "2",
  "url": "sec-cov.html#exe-cov-2",
  "type": "Exercise",
  "number": "2.4.2.2",
  "title": "",
  "body": "Let be the triangle in the plane whose vertices are the points , and .  Find a linear transformation which maps the triangle with vertices , and to .   What is the determinant of the Jacobian of your transformation?   Compute   "
},
{
  "id": "exe-cov-3",
  "level": "2",
  "url": "sec-cov.html#exe-cov-3",
  "type": "Exercise",
  "number": "2.4.2.3",
  "title": "",
  "body": " Let be a cone in with base in the plane and apex point at . Show that the volume of is the same as the volume of any other cone with base and apex point .  "
},
{
  "id": "exe-cov-4",
  "level": "2",
  "url": "sec-cov.html#exe-cov-4",
  "type": "Exercise",
  "number": "2.4.2.4",
  "title": "",
  "body": "Recall that spherical coordinates are given by the change of variables  Compute the determinant of the Jacobian of .   What domain should be used if we would like to parameterize the ball of radius ?   Use a change of variables to compute the volume of the ball of radius .  "
},
{
  "id": "exe-cov-5",
  "level": "2",
  "url": "sec-cov.html#exe-cov-5",
  "type": "Exercise",
  "number": "2.4.2.5",
  "title": "",
  "body": "Consider the change of variables  Compute the determinant of the Jacobian of .   What domain should be used if we would like to parameterize the -dimensional ball of radius centered at the origin?   Compute the volume of the -dimensional ball of radius .  "
},
{
  "id": "sec-multilinear",
  "level": "1",
  "url": "sec-multilinear.html",
  "type": "Section",
  "number": "3.1",
  "title": "Alternating forms",
  "body": " Alternating forms   This section had to come at some point, so I apologize now for presenting the inevitable content contained within! At the same time, exterior algebras could be considered a first introduction to a very intriguing subject and quite different from what you may have experienced in your mathematical education... so I retract my apology!!    Multilinear maps  The following definition generalizes, in some sense, the notion of a linear function. First though, recall that if is a vector space over and a natural number, then is the set of tuples When we take to be by definition.     Multilinear map    Let be a vector space over . A multilinear -form is a function subject to the property that, for every     There are several examples of multilinear forms that we have already encountered.  Dual vector space   The dual of can be thought of as multilinear -forms. Recall that this is the vector space of linear transformations     As is the case for the dual space, the set of multilinear -forms is also a vector space with addition and scalar multiplication defined as usual for functions We will write the vector space of multilinear -forms on as In fact, multilinear forms, when taken altogether, have even more structure than a vector space. We can take the product of a -form and a -form to get a -form by taking    Real inner products   If is a real vector space then an inner product is a -form on . This -form has the added properties of non-degeneracy and symmetry.     The determinant   If is the real vector space of row vectors, then we consider By the row linearity property of determinants, this is an -form. Of course, this also has the properties of being alternating and normalized.      Suppose is an -dimensional vector space and a basis of the dual space . Then the vector space is -dimensional with basis     To see that this is so, one first takes to be the dual basis of . We show that spans . Suppose is a -form and consider the -form where the sum is over all -tuples of numbers between and . It follows then that, for any tuple we have But then, using the fact that these are multilinear forms, it follows that so that is in the span of . The linear independence of is left as an exercise.      Alternating multilinear maps  As we saw in the examples above, there are many types of multilinear forms. Some satisfy additional conditions that help us understand them.     Alternating multilinear map    Let be a vector space over . An alternating multilinear -form is a multilinear map subject to the property that, for every      It is immediate from the definition that the determinant is an alternating form, but in fact there are many others. We construct alternating forms using wedge products which we will explore from another perspective in the next section. Let be a vector space and suppose are vectors in . Given a set of dual vectors define the matrix Using this matrix, we can define the wedge product While this appears rather abstract, when working in , it is in fact quite concrete as the next example shows.   Wedge product computation   Consider the standard dual basis of row . Then we can calculate        Show that every multilinear -form on is the sum of a symmetric form and an alternating form.  If is any -form, consider the forms and .  Verify the statements from the proof of   Verify equation    Show that is a linearly independent set by considering any linear relation and testing it against the tuple .   For the standard dual basis of calculate           Show that the wedge product does define an alternating -form. In particular, show that it is multilinear and alternating.    "
},
{
  "id": "def-multilinear",
  "level": "2",
  "url": "sec-multilinear.html#def-multilinear",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "   Multilinear map    Let be a vector space over . A multilinear -form is a function subject to the property that, for every     "
},
{
  "id": "subsec-multilinear-4",
  "level": "2",
  "url": "sec-multilinear.html#subsec-multilinear-4",
  "type": "Example",
  "number": "3.1.2",
  "title": "Dual vector space.",
  "body": " Dual vector space   The dual of can be thought of as multilinear -forms. Recall that this is the vector space of linear transformations    "
},
{
  "id": "subsec-multilinear-6",
  "level": "2",
  "url": "sec-multilinear.html#subsec-multilinear-6",
  "type": "Example",
  "number": "3.1.3",
  "title": "Real inner products.",
  "body": " Real inner products   If is a real vector space then an inner product is a -form on . This -form has the added properties of non-degeneracy and symmetry.   "
},
{
  "id": "subsec-multilinear-7",
  "level": "2",
  "url": "sec-multilinear.html#subsec-multilinear-7",
  "type": "Example",
  "number": "3.1.4",
  "title": "The determinant.",
  "body": " The determinant   If is the real vector space of row vectors, then we consider By the row linearity property of determinants, this is an -form. Of course, this also has the properties of being alternating and normalized.   "
},
{
  "id": "prop-form-basis",
  "level": "2",
  "url": "sec-multilinear.html#prop-form-basis",
  "type": "Proposition",
  "number": "3.1.5",
  "title": "",
  "body": "  Suppose is an -dimensional vector space and a basis of the dual space . Then the vector space is -dimensional with basis     To see that this is so, one first takes to be the dual basis of . We show that spans . Suppose is a -form and consider the -form where the sum is over all -tuples of numbers between and . It follows then that, for any tuple we have But then, using the fact that these are multilinear forms, it follows that so that is in the span of . The linear independence of is left as an exercise.   "
},
{
  "id": "def-alternating-multilinear",
  "level": "2",
  "url": "sec-multilinear.html#def-alternating-multilinear",
  "type": "Definition",
  "number": "3.1.6",
  "title": "",
  "body": "   Alternating multilinear map    Let be a vector space over . An alternating multilinear -form is a multilinear map subject to the property that, for every     "
},
{
  "id": "subsec-alternating-5",
  "level": "2",
  "url": "sec-multilinear.html#subsec-alternating-5",
  "type": "Example",
  "number": "3.1.7",
  "title": "Wedge product computation.",
  "body": " Wedge product computation   Consider the standard dual basis of row . Then we can calculate    "
},
{
  "id": "exe-multilinear-1",
  "level": "2",
  "url": "sec-multilinear.html#exe-multilinear-1",
  "type": "Exercise",
  "number": "3.1.3.1",
  "title": "",
  "body": " Show that every multilinear -form on is the sum of a symmetric form and an alternating form.  If is any -form, consider the forms and . "
},
{
  "id": "exe-multilinear-2",
  "level": "2",
  "url": "sec-multilinear.html#exe-multilinear-2",
  "type": "Exercise",
  "number": "3.1.3.2",
  "title": "",
  "body": "Verify the statements from the proof of   Verify equation    Show that is a linearly independent set by considering any linear relation and testing it against the tuple .  "
},
{
  "id": "exe-multilinear-3",
  "level": "2",
  "url": "sec-multilinear.html#exe-multilinear-3",
  "type": "Exercise",
  "number": "3.1.3.3",
  "title": "",
  "body": "For the standard dual basis of calculate         "
},
{
  "id": "exe-multilinear-4",
  "level": "2",
  "url": "sec-multilinear.html#exe-multilinear-4",
  "type": "Exercise",
  "number": "3.1.3.4",
  "title": "",
  "body": " Show that the wedge product does define an alternating -form. In particular, show that it is multilinear and alternating.  "
},
{
  "id": "sec-exterior",
  "level": "1",
  "url": "sec-exterior.html",
  "type": "Section",
  "number": "3.2",
  "title": "Exterior algebras",
  "body": " Exterior algebras   Wedge products were seen last section to create alternating forms. In this section, we treat them as fundamental ways to build vectors in a new vector space called the exterior algebra.    The exterior product  For the last time, we return to linear algebra and consider an -dimensional vector space over where is either or . We want to take our vector space and build several new ones . These new vector spaces consists of linear combinations of wedge products (also known as exterior products ) of vectors in . We describe the rules of such a wedge product now.     Exterior algebra    Let be a vector space over . The wedge product of vectors and is a formal vector subject to the properties:  Anti-symmetry : ,  Bilinear : .  The vector space of linear combinations of exterior products of vectors is called the -th exterior product of and denoted . By convention .    The above definition should be taken as an informal one and leaves the technical notions of tensor products to a later course. In particular, the exterior product has to satisfy a so-called universal property which distinguishes it from other algebraic structures enjoying the two defining properties. Nevertheless, let us take a casual look at products in general and arrive at a more precise description of using some propositions.  Consider linear functions from to itself. Such functions form a vector space (the dual of ). We can write such functions as . Of course, taking our usual product of functions makes new (non-linear) ones like Now what about exterior products? First, we note that if we take any vector then by anti-symmetry, which implies . I.e. taking an exterior square of a vector in gives zero. This combined with bilinearity gives This type of exercise can be enhanced to the following proposition.    If is a basis for the vector space then is a basis for the -the wedge product . Furthermore, if then is the zero vector space.    We prove that this set spans and leave linear independence to a more advanced treatment. Proceed by induction on . Certainly when we have the case of itself. Assume it to be true for , and consider the exterior product in . Then by the induction hypothesis, there are scalars with and since is a basis we also have Expanding their product and applying bilinearity then gives as a linear combination of the -products The proof of linear independence relies on the construction of the exterior algebra from tensor products which we will leave to an abstract algebra course.    For an -dimensional vector space we write and note that this vector space has both addition and exterior multiplication - in mathematics we call such spaces algebras.    If is an -dimensional vector space and then    Thus is not only an algebra it is finite dimensional. Now let us examine a key result that makes these algebras so useful.    Let be vectors in . Then they are linearly independent if and only if in .    If are linearly independent, then they can be extended to a basis of . But then asserts that is a vector in a basis for and thus is non-zero.  Conversely, if they are linearly dependent, then we may assume that, after reordering, can be written as a linear combination But then using bilinearity we have But every summand in the last expression has a wedge product of two 's, so using anti-commutativity, we get that each of these is and we are done.      Geometry of exterior algebras  The exterior algebra is miraculous in its ability to compute geometric quantities naturally. We will start with the following result.    Let be column vectors and suppose they form the matrix Then where is the standard basis.    Exercise.    We recall that the absolute value of the determinant expresses the volume of the parallelepiped spanned by the columns, so we can see that the exterior product `knows' about their volume. In fact, the exterior product knows about many other volumes as well if we start with an inner product. In particular, if has an inner product, we can extend it to define an inner product on . This can be done by taking an orthonormal basis of and making all of their products an orthonormal basis of so that forms an orthonormal basis. To see that this makes sense, we define our inner product more intrinsically as follows.     Exterior algebra inner product    Suppose is an inner product space. The inner product on two pure -th wedge products is then given by the formula This inner product can be extended to linearly.    The fact that this definition makes sense and can be extended to all of follows from row and column linearity of the determinant as well as the alternating property. From this, we obtain the following amazing result.    Let be column vectors and the -dimensional parallelepiped spanned by them. Then Here is the -dimensional volume.    We check this by considering the subspace of spanned by . If these vectors are linearly dependent, then clearly the -dimensional parallelepiped has -dimensional volume (since it is contained in a space of smaller dimension). But Proposition~\\ref{prop:wedgelinearind} then also says that implying the result in this case. So suppose that they are linearly independent and let be an orthonormal basis for (recall this can be found through the Gram-Schmidt process). We may write as a vector in using the basis via the coordinate map and in doing so, we have that Another way of saying this is that the coordinate chart preserves distance and thus preserves volume. Taking to be the parallelepiped spanned by in , we then have that where But applying Proposition~\\ref{prop:wedgevolume1} to and using the fact that is an orthonormal basis gives    Let's run this result through an example to see how quickly it solves some problems.   Area computation   Consider the column vectors and let be the parallelogram spanned by them. Then, expanding in terms of the standard basis we have Since is an orthonormal basis for and remembering that -dimensional volume is just area, we have One should take a moment to appreciate this newfound technique. It is one thing to be able to find volumes of parallelograms in the plane with simple determinants, it is another to be able to find areas of parallelograms (and volumes of parallelepipeds) in high dimensional spaces with simple arithmetic!    Now, there is a connection between the exterior algebra of a dual space and multilinear forms on . Indeed, equation gives a direct isomorphism This isomorphism gives a way to equate the two perspectives.  Happily for some, and sadly for others, exterior products can be used to give even more geometric information about a vector space. The existence of the inner product on along with a choice of orientation induces a new duality as well. Let us define these concepts now.     Orientation    An orientation on an -dimensional real inner product space is a choice of unit vector for . If comes with such a choice, we call an oriented vector space. We say that is the standard orientation of .    Recall that the dimension of is -dimensional, so there are exactly two possible unit vectors corresponding to two orientations of . Let's consider orientations of vector spaces in low dimensions.   Orientations in one dimension   For the -dimensional vector space , we have that so that an orientation is either or . I.e. we are orienting to the right or to the left (in the standard picture of the number line).     Orientations in two dimension   Considering , we have two orientations or . In the plane, we can consider as specifying a rotational direction `from to '. So the orientation can be thought of as counter-clockwise orientation (as the act of moving to is a counter-clockwise rotation) while as clockwise orientation.     Orientations in three dimension   As a last low dimensional example, consider . We still have two orientations but can write them as wedge products of the standard basis in different ways : and As always, these two orientations are negatives of each other so that in . Why call them orientations, you ask? Well, if you point your index finger parallel to your hand, middle finger perpendicular to your hand and thumb straight upward to match the directions of three basis vectors, you'll find that equals if you used your right hand and if you used your left (unless you have severely dislocated your middle finger!). In other words, choosing the right hand rule is tantamount to choosing an orientation of .    We will see that orientations are vital ingredients in integration of differential forms. For now though, we use them to define a duality called the Hodge star operator.     Hodge star    Let be an -dimensional oriented inner product space with orientation and . The Hodge star of is the unique element for which for all .    Let us check to see that is well defined and understand its properties.    The Hodge star operator is a well defined linear isomorphism.    Let be in and define the dual vector by . It is an exercise to see that then defines a linear transformation from the -th exterior product to the dual vector space of the -th exterior product. Here sends to .  In fact, this map is an isomorphism. To see this we note that if is non-zero then must also be nonzero. Indeed, if is non-zero, then written in terms of an orthonormal basis there must be at least one non-zero coefficient, say . But taking to be the numbers in not equal to any , we can compute and so But this means that so that is one-to-one. Proposition~\\ref{prop:wedgebasis} gives us that the dimension of the codomain and domain of are the same so that Corollary~\\ref{cor:equaldim} implies is a linear isomorphism. In particular, there is an inverse linear transformation  To complete the proof, one takes to be the dual vector given by pairing with , i.e. . Then one simply checks to see that    This last proof was fairly abstract, but in practice, the Hodge star can be written concretely. Before looking at a couple of examples, let's give a general formula which determines it up to sign.    Equip with the dot product and the standard orientation. If and are two disjoint sets whose union is then In particular, preserves inner products so that    Exercise.    The sign can be determined by counting the of times one must pass an index over a index to reorder into . The sign is then .  Let's see what this looks like in dimensions two and three.   Hodge star in dimension two   In with the standard orientation we have the basis of . Then one can see that Notice in particular that restricting to , we have is the isomorphism of counter-clockwise rotation by .     Hodge star in dimension three   In with the standard orientation we have the basis of . The Hodge star operator from to just interchanges with (more generally, it interchanges with for ). The interesting cases here are the isomorphisms One can compute In the -dimensional case, we have that (in contrast to the -dimensional case where we saw that it for vectors in ).      The cross product  Now, in many ways, 3 is special! One of these ways is that Note that is the only number with this property. In other words, implies . Do we all agree ... ? Yes ? Good!  Because of this, we can do something in when is -dimensional that we cannot do for an oriented inner product space of a different dimension. We can define the cross product on vectors as: Indeed, suppose is -dimensional. Because belong to , their wedge product is in . This means their Hodge star is in . If we want this to be a vector in then we must have that ... so must be . I am explaining this because in every one of the millions of multivariable calculus courses I have taught, a bright student has asked me whether there is a cross product in other dimensions, to which I answer: there is something, but not a cross product .  Now, while I firmly believe that in years, every college student will learn wedge products, the Hodge star operator, and higher dimensional volumes rendering cross products a strange relic of the past, we do not yet live in this idyllic future. So it is important you know how to compute cross products in order to converse with your less enlightened future colleagues. Let's derive the formula: While every multivariable calculus student sees this formula at some point, the most common way they learn to use it is to take the determinant of the following strange looking matrix Although the first row entries are vectors, the formula for determinant still makes some sense and can be seen to match up with the derived formula. The properties of the cross product are also quite universally taught, but again are much easier to verify in our general setting.    Suppose and are -dimensional vectors. Then   ,   is orthogonal to both and .   is the area of the parallelogram spanned by and .  if and span a plane, the vectors are oriented with respect to the right hand rule.      Property (1) follows from linearity of since For (2), we recall that in , is the identity. Then, using the defining property of the Hodge star operator, This implies and a similar argument (or using (1)) gives For (3), take to be the parallelogram spanned by and . Then we just apply along with equation of to get Finally, for (4) we must explain what is meant if it is not clear. A basis in an oriented vector space is positively oriented if there is a positive real number for which This is what is meant by saying are oriented with respect to the right hand rule - that they are positively oriented with respect to the standard orientation . Seeing this is simple though. Using our defining property of Hodge star we have, Because and span a plane, they are linearly independent so that implies is non-zero giving our result.    In the coming sections, we will see that exterior products play a central role when we consider integration of forms and several fundamental theorems such as Stokes', Green's, and the divergence theorem.    Express the following wedge products as linear combinations of the basis .           While it is true that given a vector in , we always have , this is not true for any vector in . Show that the wedge square of is not zero in .    Show that is a linear transformation as claimed in equation .    Calculate the cross product    Compute the Hodge star operators of the following vectors assuming the standard orientation of .   in ,   in .    "
},
{
  "id": "subsec-exterior-product-2",
  "level": "2",
  "url": "sec-exterior.html#subsec-exterior-product-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "wedge products exterior products "
},
{
  "id": "def-exterior-algebra",
  "level": "2",
  "url": "sec-exterior.html#def-exterior-algebra",
  "type": "Definition",
  "number": "3.2.1",
  "title": "",
  "body": "   Exterior algebra    Let be a vector space over . The wedge product of vectors and is a formal vector subject to the properties:  Anti-symmetry : ,  Bilinear : .  The vector space of linear combinations of exterior products of vectors is called the -th exterior product of and denoted . By convention .   "
},
{
  "id": "prop-wedgebasis",
  "level": "2",
  "url": "sec-exterior.html#prop-wedgebasis",
  "type": "Proposition",
  "number": "3.2.2",
  "title": "",
  "body": "  If is a basis for the vector space then is a basis for the -the wedge product . Furthermore, if then is the zero vector space.    We prove that this set spans and leave linear independence to a more advanced treatment. Proceed by induction on . Certainly when we have the case of itself. Assume it to be true for , and consider the exterior product in . Then by the induction hypothesis, there are scalars with and since is a basis we also have Expanding their product and applying bilinearity then gives as a linear combination of the -products The proof of linear independence relies on the construction of the exterior algebra from tensor products which we will leave to an abstract algebra course.   "
},
{
  "id": "subsec-exterior-product-8",
  "level": "2",
  "url": "sec-exterior.html#subsec-exterior-product-8",
  "type": "Corollary",
  "number": "3.2.3",
  "title": "",
  "body": "  If is an -dimensional vector space and then   "
},
{
  "id": "prop-wedgelinearind",
  "level": "2",
  "url": "sec-exterior.html#prop-wedgelinearind",
  "type": "Proposition",
  "number": "3.2.4",
  "title": "",
  "body": "  Let be vectors in . Then they are linearly independent if and only if in .    If are linearly independent, then they can be extended to a basis of . But then asserts that is a vector in a basis for and thus is non-zero.  Conversely, if they are linearly dependent, then we may assume that, after reordering, can be written as a linear combination But then using bilinearity we have But every summand in the last expression has a wedge product of two 's, so using anti-commutativity, we get that each of these is and we are done.   "
},
{
  "id": "prop-wedgevolume1",
  "level": "2",
  "url": "sec-exterior.html#prop-wedgevolume1",
  "type": "Proposition",
  "number": "3.2.5",
  "title": "",
  "body": "  Let be column vectors and suppose they form the matrix Then where is the standard basis.    Exercise.   "
},
{
  "id": "def-exterior-inner-product",
  "level": "2",
  "url": "sec-exterior.html#def-exterior-inner-product",
  "type": "Definition",
  "number": "3.2.6",
  "title": "",
  "body": "   Exterior algebra inner product    Suppose is an inner product space. The inner product on two pure -th wedge products is then given by the formula This inner product can be extended to linearly.   "
},
{
  "id": "prop-parallelepipedvolume",
  "level": "2",
  "url": "sec-exterior.html#prop-parallelepipedvolume",
  "type": "Proposition",
  "number": "3.2.7",
  "title": "",
  "body": "  Let be column vectors and the -dimensional parallelepiped spanned by them. Then Here is the -dimensional volume.    We check this by considering the subspace of spanned by . If these vectors are linearly dependent, then clearly the -dimensional parallelepiped has -dimensional volume (since it is contained in a space of smaller dimension). But Proposition~\\ref{prop:wedgelinearind} then also says that implying the result in this case. So suppose that they are linearly independent and let be an orthonormal basis for (recall this can be found through the Gram-Schmidt process). We may write as a vector in using the basis via the coordinate map and in doing so, we have that Another way of saying this is that the coordinate chart preserves distance and thus preserves volume. Taking to be the parallelepiped spanned by in , we then have that where But applying Proposition~\\ref{prop:wedgevolume1} to and using the fact that is an orthonormal basis gives   "
},
{
  "id": "subsec-exterior-algebra-geometry-9",
  "level": "2",
  "url": "sec-exterior.html#subsec-exterior-algebra-geometry-9",
  "type": "Example",
  "number": "3.2.8",
  "title": "Area computation.",
  "body": " Area computation   Consider the column vectors and let be the parallelogram spanned by them. Then, expanding in terms of the standard basis we have Since is an orthonormal basis for and remembering that -dimensional volume is just area, we have One should take a moment to appreciate this newfound technique. It is one thing to be able to find volumes of parallelograms in the plane with simple determinants, it is another to be able to find areas of parallelograms (and volumes of parallelepipeds) in high dimensional spaces with simple arithmetic!   "
},
{
  "id": "def-orientation",
  "level": "2",
  "url": "sec-exterior.html#def-orientation",
  "type": "Definition",
  "number": "3.2.9",
  "title": "",
  "body": "   Orientation    An orientation on an -dimensional real inner product space is a choice of unit vector for . If comes with such a choice, we call an oriented vector space. We say that is the standard orientation of .   "
},
{
  "id": "subsec-exterior-algebra-geometry-14",
  "level": "2",
  "url": "sec-exterior.html#subsec-exterior-algebra-geometry-14",
  "type": "Example",
  "number": "3.2.10",
  "title": "Orientations in one dimension.",
  "body": " Orientations in one dimension   For the -dimensional vector space , we have that so that an orientation is either or . I.e. we are orienting to the right or to the left (in the standard picture of the number line).   "
},
{
  "id": "subsec-exterior-algebra-geometry-15",
  "level": "2",
  "url": "sec-exterior.html#subsec-exterior-algebra-geometry-15",
  "type": "Example",
  "number": "3.2.11",
  "title": "Orientations in two dimension.",
  "body": " Orientations in two dimension   Considering , we have two orientations or . In the plane, we can consider as specifying a rotational direction `from to '. So the orientation can be thought of as counter-clockwise orientation (as the act of moving to is a counter-clockwise rotation) while as clockwise orientation.   "
},
{
  "id": "subsec-exterior-algebra-geometry-16",
  "level": "2",
  "url": "sec-exterior.html#subsec-exterior-algebra-geometry-16",
  "type": "Example",
  "number": "3.2.12",
  "title": "Orientations in three dimension.",
  "body": " Orientations in three dimension   As a last low dimensional example, consider . We still have two orientations but can write them as wedge products of the standard basis in different ways : and As always, these two orientations are negatives of each other so that in . Why call them orientations, you ask? Well, if you point your index finger parallel to your hand, middle finger perpendicular to your hand and thumb straight upward to match the directions of three basis vectors, you'll find that equals if you used your right hand and if you used your left (unless you have severely dislocated your middle finger!). In other words, choosing the right hand rule is tantamount to choosing an orientation of .   "
},
{
  "id": "def-hodge-star",
  "level": "2",
  "url": "sec-exterior.html#def-hodge-star",
  "type": "Definition",
  "number": "3.2.13",
  "title": "",
  "body": "   Hodge star    Let be an -dimensional oriented inner product space with orientation and . The Hodge star of is the unique element for which for all .   "
},
{
  "id": "prop-hodge-star-operator",
  "level": "2",
  "url": "sec-exterior.html#prop-hodge-star-operator",
  "type": "Proposition",
  "number": "3.2.14",
  "title": "",
  "body": "  The Hodge star operator is a well defined linear isomorphism.    Let be in and define the dual vector by . It is an exercise to see that then defines a linear transformation from the -th exterior product to the dual vector space of the -th exterior product. Here sends to .  In fact, this map is an isomorphism. To see this we note that if is non-zero then must also be nonzero. Indeed, if is non-zero, then written in terms of an orthonormal basis there must be at least one non-zero coefficient, say . But taking to be the numbers in not equal to any , we can compute and so But this means that so that is one-to-one. Proposition~\\ref{prop:wedgebasis} gives us that the dimension of the codomain and domain of are the same so that Corollary~\\ref{cor:equaldim} implies is a linear isomorphism. In particular, there is an inverse linear transformation  To complete the proof, one takes to be the dual vector given by pairing with , i.e. . Then one simply checks to see that   "
},
{
  "id": "prop-Hodgeformula",
  "level": "2",
  "url": "sec-exterior.html#prop-Hodgeformula",
  "type": "Proposition",
  "number": "3.2.15",
  "title": "",
  "body": "  Equip with the dot product and the standard orientation. If and are two disjoint sets whose union is then In particular, preserves inner products so that    Exercise.   "
},
{
  "id": "subsec-exterior-algebra-geometry-25",
  "level": "2",
  "url": "sec-exterior.html#subsec-exterior-algebra-geometry-25",
  "type": "Example",
  "number": "3.2.16",
  "title": "Hodge star in dimension two.",
  "body": " Hodge star in dimension two   In with the standard orientation we have the basis of . Then one can see that Notice in particular that restricting to , we have is the isomorphism of counter-clockwise rotation by .   "
},
{
  "id": "subsec-exterior-algebra-geometry-26",
  "level": "2",
  "url": "sec-exterior.html#subsec-exterior-algebra-geometry-26",
  "type": "Example",
  "number": "3.2.17",
  "title": "Hodge star in dimension three.",
  "body": " Hodge star in dimension three   In with the standard orientation we have the basis of . The Hodge star operator from to just interchanges with (more generally, it interchanges with for ). The interesting cases here are the isomorphisms One can compute In the -dimensional case, we have that (in contrast to the -dimensional case where we saw that it for vectors in ).   "
},
{
  "id": "subsec-cross-product-2",
  "level": "2",
  "url": "sec-exterior.html#subsec-cross-product-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "3 "
},
{
  "id": "subsec-cross-product-3",
  "level": "2",
  "url": "sec-exterior.html#subsec-cross-product-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cross product "
},
{
  "id": "prop-cross-product-properties",
  "level": "2",
  "url": "sec-exterior.html#prop-cross-product-properties",
  "type": "Proposition",
  "number": "3.2.18",
  "title": "",
  "body": "  Suppose and are -dimensional vectors. Then   ,   is orthogonal to both and .   is the area of the parallelogram spanned by and .  if and span a plane, the vectors are oriented with respect to the right hand rule.      Property (1) follows from linearity of since For (2), we recall that in , is the identity. Then, using the defining property of the Hodge star operator, This implies and a similar argument (or using (1)) gives For (3), take to be the parallelogram spanned by and . Then we just apply along with equation of to get Finally, for (4) we must explain what is meant if it is not clear. A basis in an oriented vector space is positively oriented if there is a positive real number for which This is what is meant by saying are oriented with respect to the right hand rule - that they are positively oriented with respect to the standard orientation . Seeing this is simple though. Using our defining property of Hodge star we have, Because and span a plane, they are linearly independent so that implies is non-zero giving our result.   "
},
{
  "id": "exe-exterior-1",
  "level": "2",
  "url": "sec-exterior.html#exe-exterior-1",
  "type": "Exercise",
  "number": "3.2.4.1",
  "title": "",
  "body": "Express the following wedge products as linear combinations of the basis .         "
},
{
  "id": "exe-exterior-2",
  "level": "2",
  "url": "sec-exterior.html#exe-exterior-2",
  "type": "Exercise",
  "number": "3.2.4.2",
  "title": "",
  "body": " While it is true that given a vector in , we always have , this is not true for any vector in . Show that the wedge square of is not zero in .  "
},
{
  "id": "exe-exterior-3",
  "level": "2",
  "url": "sec-exterior.html#exe-exterior-3",
  "type": "Exercise",
  "number": "3.2.4.3",
  "title": "",
  "body": " Show that is a linear transformation as claimed in equation .  "
},
{
  "id": "exe-exterior-4",
  "level": "2",
  "url": "sec-exterior.html#exe-exterior-4",
  "type": "Exercise",
  "number": "3.2.4.4",
  "title": "",
  "body": " Calculate the cross product   "
},
{
  "id": "exe-exterior-5",
  "level": "2",
  "url": "sec-exterior.html#exe-exterior-5",
  "type": "Exercise",
  "number": "3.2.4.5",
  "title": "",
  "body": "Compute the Hodge star operators of the following vectors assuming the standard orientation of .   in ,   in .  "
},
{
  "id": "sec-forms",
  "level": "1",
  "url": "sec-forms.html",
  "type": "Section",
  "number": "3.3",
  "title": "Differential forms",
  "body": " Differential forms   As we have seen, much of multivariable calculus is concerned with linearization of non-linear functions. This is done by placing a vector space , the tangent space, at every point in the space we're interested in. What we have witnessed in the prior sections is a way to take any space and build new ones such as multilinear -forms or exterior algebras. The idea of differential forms is to build such new vector spaces at every point and consider fields of forms as we have considered vector fields when studying differential equations.   Let us observe an application of exterior products and this proposition right now. To do this, we need to define differential forms.     Tangent space    Let be an open subset of . A differential -form  on is a smooth assignment which takes to a tangent covector . A differential -form is a linear combination of -exterior products of -forms or, equivalently, a smooth assignment to alternating -forms on the tangent spaces.    Equivalently, we may consider a differential -form to be an assignment from to the dual of the -th exterior space , i.e. a vector in . Differential -forms are dual to vector fields in that if we have a vector field on and a differential one form on then is a scalar function on . The most common way to create a differential -form is to take the derivative of a scalar function!     Exterior derivative of scalar function    If is an open subset of and , write the standard dual basis of as I.e. these are the dual vectors to the standard tangent vectors in that The (exterior) derivative of a scalar function is then defined as the differential -form    The student should note that this is really nothing new (yet), just a different way of expressing the usual derivative of an ordinary scalar function. For example, if we take then the original definition of the derivative of at is a linear transformation from to . Using the standard basis of vector fields, we identify these tangent spaces with and and write this derivative as the matrix As a differential -form, this is written We will see differential forms in much more detail later on as they form the heart of multivariable calculus. For now, let us use them to re-express Lagrange multipliers.   Lagrange multipliers with one constraint - exterior product version   Suppose is an open set in , and two differentiable scalar functions. If is the level set of then a smooth point is a critical point of if and only if the differential -form vanishes at .    The major advantage of this over the previous version is that there are no multipliers! Thus we have automatically eliminated one variable that needs to be solved in the previous version. Let's take another look at but using this technique.   Lagrange multiplier using differential forms   Recall that in we wanted to find critical points of on the hyperboloid We compute derivatives but now write them as differential -forms to see Now we compute the exterior product For this -form to be zero, each of the coefficient functions must be zero. The coefficient is zero if and only if either or . Again, the constraint implies not both can be zero. Consider both cases:  Suppose and . Since , the coefficient is zero. Since the coefficient being zero implies so that .  Suppose and . Since , the coefficient is zero. Since the coefficient being zero implies so that .  Putting these into the constraint then produces the critical points as before.    The procedure for several constraints also follows from as well.   Lagrange multipliers with several constraints - exterior products version   Suppose is an open set in , a differentiable vector valued function with of full rank and a differentiable scalar function. If is the level set of then a smooth point is a critical point of if and only if is zero at .    Differential forms also exhibit naturality when it comes to functions between vector spaces.  Now, why do we consider this definition when it seems to just be a repeat of the prior definitions with a lot more vocabulary? The answer is manifold (pun), but one precise answer comes from considering how to transform differential forms.     Pullback of -form    Let be a domain in with coordinates and a domain in with coordinates . If is a differential function given by and is a differential -form on then the pullback of to via is the differential -form on given by Here is just the exterior derivative .     Pullback of a form   Suppose is defined taking to . Consider the -form and the two form We compute the pullbacks and . To do so, we first compute Then and    Pullbacks satisfy some key properties that make them natural operations to consider.    Let be a domain in , a domain in , and is a differential function. If and are differential forms on then            Compute the exterior derivatives of the following functions   ,   ,    .    Use wedge products of differential -forms to find critical points of on the ellipsoid    Prove one of the two conclusions in .    "
},
{
  "id": "def-differential-form",
  "level": "2",
  "url": "sec-forms.html#def-differential-form",
  "type": "Definition",
  "number": "3.3.1",
  "title": "",
  "body": "   Tangent space    Let be an open subset of . A differential -form  on is a smooth assignment which takes to a tangent covector . A differential -form is a linear combination of -exterior products of -forms or, equivalently, a smooth assignment to alternating -forms on the tangent spaces.   "
},
{
  "id": "def-exterior-derivative",
  "level": "2",
  "url": "sec-forms.html#def-exterior-derivative",
  "type": "Definition",
  "number": "3.3.2",
  "title": "",
  "body": "   Exterior derivative of scalar function    If is an open subset of and , write the standard dual basis of as I.e. these are the dual vectors to the standard tangent vectors in that The (exterior) derivative of a scalar function is then defined as the differential -form   "
},
{
  "id": "prop-lagrangian-one-constaint",
  "level": "2",
  "url": "sec-forms.html#prop-lagrangian-one-constaint",
  "type": "Proposition",
  "number": "3.3.3",
  "title": "Lagrange multipliers with one constraint - exterior product version.",
  "body": " Lagrange multipliers with one constraint - exterior product version   Suppose is an open set in , and two differentiable scalar functions. If is the level set of then a smooth point is a critical point of if and only if the differential -form vanishes at .   "
},
{
  "id": "sec-forms-10",
  "level": "2",
  "url": "sec-forms.html#sec-forms-10",
  "type": "Example",
  "number": "3.3.4",
  "title": "Lagrange multiplier using differential forms.",
  "body": " Lagrange multiplier using differential forms   Recall that in we wanted to find critical points of on the hyperboloid We compute derivatives but now write them as differential -forms to see Now we compute the exterior product For this -form to be zero, each of the coefficient functions must be zero. The coefficient is zero if and only if either or . Again, the constraint implies not both can be zero. Consider both cases:  Suppose and . Since , the coefficient is zero. Since the coefficient being zero implies so that .  Suppose and . Since , the coefficient is zero. Since the coefficient being zero implies so that .  Putting these into the constraint then produces the critical points as before.   "
},
{
  "id": "prop-lagrangian-several-constaints",
  "level": "2",
  "url": "sec-forms.html#prop-lagrangian-several-constaints",
  "type": "Proposition",
  "number": "3.3.5",
  "title": "Lagrange multipliers with several constraints - exterior products version.",
  "body": " Lagrange multipliers with several constraints - exterior products version   Suppose is an open set in , a differentiable vector valued function with of full rank and a differentiable scalar function. If is the level set of then a smooth point is a critical point of if and only if is zero at .   "
},
{
  "id": "def-pullback",
  "level": "2",
  "url": "sec-forms.html#def-pullback",
  "type": "Definition",
  "number": "3.3.6",
  "title": "",
  "body": "   Pullback of -form    Let be a domain in with coordinates and a domain in with coordinates . If is a differential function given by and is a differential -form on then the pullback of to via is the differential -form on given by Here is just the exterior derivative .   "
},
{
  "id": "sec-forms-16",
  "level": "2",
  "url": "sec-forms.html#sec-forms-16",
  "type": "Example",
  "number": "3.3.7",
  "title": "Pullback of a form.",
  "body": " Pullback of a form   Suppose is defined taking to . Consider the -form and the two form We compute the pullbacks and . To do so, we first compute Then and   "
},
{
  "id": "prop-pullback-properties",
  "level": "2",
  "url": "sec-forms.html#prop-pullback-properties",
  "type": "Proposition",
  "number": "3.3.8",
  "title": "",
  "body": "  Let be a domain in , a domain in , and is a differential function. If and are differential forms on then          "
},
{
  "id": "exe-forms-1",
  "level": "2",
  "url": "sec-forms.html#exe-forms-1",
  "type": "Exercise",
  "number": "3.3.1",
  "title": "",
  "body": "Compute the exterior derivatives of the following functions   ,   ,    .  "
},
{
  "id": "exe-forms-2",
  "level": "2",
  "url": "sec-forms.html#exe-forms-2",
  "type": "Exercise",
  "number": "3.3.2",
  "title": "",
  "body": " Use wedge products of differential -forms to find critical points of on the ellipsoid  "
},
{
  "id": "exe-forms-3",
  "level": "2",
  "url": "sec-forms.html#exe-forms-3",
  "type": "Exercise",
  "number": "3.3.3",
  "title": "",
  "body": " Prove one of the two conclusions in .  "
},
{
  "id": "sec-integrating-forms",
  "level": "1",
  "url": "sec-integrating-forms.html",
  "type": "Section",
  "number": "4.1",
  "title": "Integrating forms",
  "body": " Integrating forms   In this section, we consider changing both the integrand and the domain of integration to obtain an expression where is a -dimensional oriented domain in and is a differential -form. To make sense of this, we proceed in steps.    Integrating top forms  Let be a domain in which is the closure of an open set and has a smooth boundary (perhaps with some corners).     Orientation form    An orientation form on is a nowhere vanishing differential -form for which is a unit vector in for each . We say that is oriented if it is equipped with an orientation form. If is any -form on then we say it is compatible with orientation if for a strictly positive scalar function .  The standard orientation is the form    The idea of an oriented domain in is that we ignore the coordinates for a moment and imagine equipping the domain with its own orientation. The following result can be found in a topology course. To state it, we remind the student that a domain is connected if, given any two open sets and for which is contained in , we must have that is contained in or is contained in .    If is open and connected and is an orientation form on then .    Let's digest this with and replace with . We could imagine an interval in and hope to find the integral for some function on . If is its anti-derivative, one could use the Fundamental Theorem of Calculus to get But of course this means we have and in a sense, have oriented . If we chose an opposite orientation, then we may obtain the opposite answer Indeed, we now can make a general definition.     Integration of -form    Suppose is an oriented domain in and a differential -form on . Then there is a scalar function on for which Let    If we omit the orientation, we assume that has the standard orientation. To calculate with orientations, we need to know when a parameterization of an oriented domain retains the correct orientation information.     orientation preserving change of variables    If and are oriented domains, and is a change of variables, we say that  preserves orientation if is compatible with the orientation of .    With this in mind, we can write the differential form version of change of variables.   Chain Rule   Suppose and are oriented domains in . Let be a change of variables which preserves orientation and an -form on . Then   Exercise.   While it is certainly true that there is some mathematics buried within the notation of differential forms, orientations and pullbacks, the above form shows the drastic simplifying power of using forms to express complicated formulas. This, of course, is just the beginning of their utility.    Integrating -forms on oriented subspaces.  Recall from that a smooth -dimensional subspace of is any subspace with a parameterization near every point of . We will need to add orientations to such subspaces as a part of their package.     oriented smooth subspace    Suppose is a smooth -dimensional subspace of . An orientation on is a differential -form defined on a neighborhood of such that, for any local parameterization the pullback is nowhere zero on . Two orientations are equivalent if their pullbacks are compatible for any local parameterization. We say is an oriented smooth -dimensional subspace of .    Some orientations are very familiar. To see this, we first need to use inner products to take vector fields to -forms. Suppose is a vector field in . Define the dual differential -form to be the field of cotangent vectors which are defined by for any tangent vector .   Oriented curve   If is a connected curve, then an orientation on is equivalent to a continuous choice of unit tangent vector of each point of . One can think of this as a vector field along . To obtain an orientation as given in , define the orientation form as the dual -form .     Oriented surface   If is a surface in , then one often defines an orientation on as a continuous choice of unit normal vector as varies in . To get from this to , take the Hodge star operator of the dual -form .    As it turns out, once the dimension of the space exceeds , there are examples of subspaces that are not orientable. The M\\\"obius strip is one such example in dimension . One reason for orienting a smooth subspace is that for such spaces we can integrate forms.     integration of form on oriented subspace    Let be a smooth oriented -dimensional subspace of compatibly parameterized by . If is an -form on a neighborhood of then define     This definition makes sense because of the version of the chain rule.   Chain rule   Let and be domains in Euclidean spaces. Suppose and are differentiable functions and is a differentiable -form on , then    Exercise.    This lemma ensures our definition makes sense because, if is another parameterization then we may compose with the inverse of to get a change of variables and, applying a change of variables we see Thus the quantity obtained is independent of the parameterization.  To extend to any smooth oriented -dimensional subspace (not just ones with a single parameterization), one must consider a finite cover of by open sets and with compatibly oriented parameterizations . Then we define what is known as a partition of unity  subordinate to the cover which is a collection of non-negative scalar functions on . Each is only non-zero on and their sum is the constant function . With such a partition of unity in hand, we can define the integration of an -form on to be We will revisit partitions of unity with a bit more detail when we prove the Generalized Stokes' Theorem.     Write down four distinct orientations for the domain    Using the change of coordinates , find the pullback forms :   ,        Prove the differential form version of the change of variables .    Prove the claim in that defines an orientation on a surface in if is a continuously normal vector field to .    Prove the differential form version of the chain rule for -forms .   Let be the ellipse given by oriented counterclockwise.  Give a compatibly oriented and non-compatibly oriented parameterization of .   For the one form , compute    For the one form , compute     Let be a straight line curve in from the origin to . Compute   Let be the unit sphere in oriented with outward normal.  Give an example of a -form in that induces an orientation on .   Compute the surface integral     "
},
{
  "id": "def-orientation-form",
  "level": "2",
  "url": "sec-integrating-forms.html#def-orientation-form",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": "   Orientation form    An orientation form on is a nowhere vanishing differential -form for which is a unit vector in for each . We say that is oriented if it is equipped with an orientation form. If is any -form on then we say it is compatible with orientation if for a strictly positive scalar function .  The standard orientation is the form   "
},
{
  "id": "subsec-integrating-top-forms-4",
  "level": "2",
  "url": "sec-integrating-forms.html#subsec-integrating-top-forms-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "connected "
},
{
  "id": "prop-orientation-open",
  "level": "2",
  "url": "sec-integrating-forms.html#prop-orientation-open",
  "type": "Proposition",
  "number": "4.1.2",
  "title": "",
  "body": "  If is open and connected and is an orientation form on then .   "
},
{
  "id": "def-integration-top-form",
  "level": "2",
  "url": "sec-integrating-forms.html#def-integration-top-form",
  "type": "Definition",
  "number": "4.1.3",
  "title": "",
  "body": "   Integration of -form    Suppose is an oriented domain in and a differential -form on . Then there is a scalar function on for which Let   "
},
{
  "id": "def-orientation-preserving",
  "level": "2",
  "url": "sec-integrating-forms.html#def-orientation-preserving",
  "type": "Definition",
  "number": "4.1.4",
  "title": "",
  "body": "   orientation preserving change of variables    If and are oriented domains, and is a change of variables, we say that  preserves orientation if is compatible with the orientation of .   "
},
{
  "id": "thm-covdiff",
  "level": "2",
  "url": "sec-integrating-forms.html#thm-covdiff",
  "type": "Theorem",
  "number": "4.1.5",
  "title": "Chain Rule.",
  "body": " Chain Rule   Suppose and are oriented domains in . Let be a change of variables which preserves orientation and an -form on . Then   Exercise.  "
},
{
  "id": "def-orientation-subspace",
  "level": "2",
  "url": "sec-integrating-forms.html#def-orientation-subspace",
  "type": "Definition",
  "number": "4.1.6",
  "title": "",
  "body": "   oriented smooth subspace    Suppose is a smooth -dimensional subspace of . An orientation on is a differential -form defined on a neighborhood of such that, for any local parameterization the pullback is nowhere zero on . Two orientations are equivalent if their pullbacks are compatible for any local parameterization. We say is an oriented smooth -dimensional subspace of .   "
},
{
  "id": "subsec-integrating-k-forms-5",
  "level": "2",
  "url": "sec-integrating-forms.html#subsec-integrating-k-forms-5",
  "type": "Example",
  "number": "4.1.7",
  "title": "Oriented curve.",
  "body": " Oriented curve   If is a connected curve, then an orientation on is equivalent to a continuous choice of unit tangent vector of each point of . One can think of this as a vector field along . To obtain an orientation as given in , define the orientation form as the dual -form .   "
},
{
  "id": "ex-normalorientation",
  "level": "2",
  "url": "sec-integrating-forms.html#ex-normalorientation",
  "type": "Example",
  "number": "4.1.8",
  "title": "Oriented surface.",
  "body": " Oriented surface   If is a surface in , then one often defines an orientation on as a continuous choice of unit normal vector as varies in . To get from this to , take the Hodge star operator of the dual -form .   "
},
{
  "id": "def-intofform",
  "level": "2",
  "url": "sec-integrating-forms.html#def-intofform",
  "type": "Definition",
  "number": "4.1.9",
  "title": "",
  "body": "   integration of form on oriented subspace    Let be a smooth oriented -dimensional subspace of compatibly parameterized by . If is an -form on a neighborhood of then define    "
},
{
  "id": "lem-chain-rule",
  "level": "2",
  "url": "sec-integrating-forms.html#lem-chain-rule",
  "type": "Lemma",
  "number": "4.1.10",
  "title": "Chain rule.",
  "body": " Chain rule   Let and be domains in Euclidean spaces. Suppose and are differentiable functions and is a differentiable -form on , then    Exercise.   "
},
{
  "id": "subsec-integrating-k-forms-12",
  "level": "2",
  "url": "sec-integrating-forms.html#subsec-integrating-k-forms-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partition of unity "
},
{
  "id": "exe-formintegration-1",
  "level": "2",
  "url": "sec-integrating-forms.html#exe-formintegration-1",
  "type": "Exercise",
  "number": "4.1.3.1",
  "title": "",
  "body": " Write down four distinct orientations for the domain   "
},
{
  "id": "exe-formintegration-2",
  "level": "2",
  "url": "sec-integrating-forms.html#exe-formintegration-2",
  "type": "Exercise",
  "number": "4.1.3.2",
  "title": "",
  "body": "Using the change of coordinates , find the pullback forms :   ,      "
},
{
  "id": "exe-formintegration-3",
  "level": "2",
  "url": "sec-integrating-forms.html#exe-formintegration-3",
  "type": "Exercise",
  "number": "4.1.3.3",
  "title": "",
  "body": " Prove the differential form version of the change of variables .  "
},
{
  "id": "exe-formintegration-4",
  "level": "2",
  "url": "sec-integrating-forms.html#exe-formintegration-4",
  "type": "Exercise",
  "number": "4.1.3.4",
  "title": "",
  "body": " Prove the claim in that defines an orientation on a surface in if is a continuously normal vector field to .  "
},
{
  "id": "exe-formintegration-5",
  "level": "2",
  "url": "sec-integrating-forms.html#exe-formintegration-5",
  "type": "Exercise",
  "number": "4.1.3.5",
  "title": "",
  "body": " Prove the differential form version of the chain rule for -forms .  "
},
{
  "id": "exe-formintegration-6",
  "level": "2",
  "url": "sec-integrating-forms.html#exe-formintegration-6",
  "type": "Exercise",
  "number": "4.1.3.6",
  "title": "",
  "body": "Let be the ellipse given by oriented counterclockwise.  Give a compatibly oriented and non-compatibly oriented parameterization of .   For the one form , compute    For the one form , compute   "
},
{
  "id": "exe-formintegration-7",
  "level": "2",
  "url": "sec-integrating-forms.html#exe-formintegration-7",
  "type": "Exercise",
  "number": "4.1.3.7",
  "title": "",
  "body": " Let be a straight line curve in from the origin to . Compute  "
},
{
  "id": "exe-formintegration-8",
  "level": "2",
  "url": "sec-integrating-forms.html#exe-formintegration-8",
  "type": "Exercise",
  "number": "4.1.3.8",
  "title": "",
  "body": "Let be the unit sphere in oriented with outward normal.  Give an example of a -form in that induces an orientation on .   Compute the surface integral   "
},
{
  "id": "sec-scalarintegrals",
  "level": "1",
  "url": "sec-scalarintegrals.html",
  "type": "Section",
  "number": "4.2",
  "title": "Scalar integrals",
  "body": " Scalar integrals   One may want to compute the length of a curve, the surface area of a surface in , or the mass of a curve or surface with a mass density function . The appropriate type of integral for these types of problems is the scalar integral. To define it, we first define a modified orientation form on a smooth subspace. If is a smooth -dimensional subspace of , then by Gram-Schmidt at each point of , the tangent space has an orthonormal basis (using the dot product in ) . This can be expanded to an orthonormal basis of and write for the dual cotangent vectors. Since is an orientatation -form on , its expansion at can be written In fact, the only summand in this expansion that matters to being an orientation is the one where equals (because all others have a form that pulls back to zero for any parameterization of ). We thus may replace with to obtain a wedge product in . This replacement may be done smoothly along all of (not just at ) to yield a new orientation form which gives an equivalent orientation, but also has the geometric property that at every point in . We call the volume orientation (or volume form ) on . We use this particular -form to define the main player in our current section.     Scalar integral    Let be smooth oriented -dimensional subspace of and a scalar function on . The scalar integral of on is the integral    The following proposition can be taken as a definition, or proven to agree with other notions of volume (of curved subspaces in ) with some work.    Let be smooth oriented -dimensional subspace of . The volume of is the scalar integral of given by    To compute a scalar integral, one generally needs a parameterization . When we have this data, there is a formula which, depending on the parameterization, may be quite simple or impossibly difficult to write down.    Let be smooth oriented -dimensional subspace of , an domain in , an orientation preserving parameterization given by and a scalar function on . Let be the tangent vector field along . Then the scalar integral equals    To see this proposition holds, simply note that is a basis for the tangent space at (at any given point). This follows from the definition of parameterizations. Taking to be the dual cotangent vector, it is an exercise to show that Now, since both and are oriented bases for with the former an orthonormal basis, and since is -dimensional, we have that The dual statement to this is that Thus we obtain the formula for the pullback of relative to  Putting this into the formula for the integral of an -form on gives the result.    As a final point, we note the following relatively easy result.    The scalar integral is independent of the orientation of .    One may wonder at first why this is true since we know that switching orientations should result in changing the sign of the integral of a given differential -form. However, the scalar integral has the added ingredient that the -form being integrated is tied to the orientation, which results in an additional sign change that cancels out the one associated to the change of orientation. Of course, this makes sense intuitively as well: the surface area of a sphere should not depend on whether we orient one way or the other. A consequence of this is that one may define scalar integrals on smooth subspaces that do not have an orientation.  There are several different notations for the scalar integral. More important than notation, there are techniques for computing these integrals which don't rely on the orientation (which may seem mysterious given that our definition has the a multiple of the orientation form as \\textit{the} form being integrated!). We will work through examples to illustrate these points.    Scalar line integrals  Given a curve in , parameterized by , and a scalar function on it, the most common notation for a scalar integral is Such an integral on a curve is called a scalar line integral . This formula follows immediately from equation . Students may question why the letter is used in the notation. This is because is often used as an arc-length parameter for the curve.  Now, let me be honest with the reader here. Scalar integrals are just awful to compute. It takes great care to actually write down curves and integrands with an exact solution. Of course, a computer can do a very good job of approximating them though. Nevertheless, it is always good to go through a few well crafted examples to make sure we have a feel for the process.   Scalar line integral I   Let be the circle in centered at the origin and of radius . This can be given by a parameterization via The most reasonable scalar integral to try here first is of the function which gives the circumference. For this, we need the tangent vector of and its norm so we calculate: This leads to the very simple integral In this case, because the norm of the tangent vector for our parameterization is constant, many other scalar integrals are accessible. For example, if were a mass density function on and we wanted to compute total mass, we use our prior computations and find    The ease at which we can compute scalar line integrals on the circle follows from the fact that there is a constant speed parameterization that we all know. While it is the case that every smooth curve has such a parameterization, finding it can be a difficult task. Let us observe an example when such a parameterization is not immediately available.   Scalar line integral II   Suppose we want to compute the length of the twisted cubic curve  for . We proceed by computing the tangent vector and its norm. This yields the integral Such an integral will require even the most advanced second semester calculus student a good amount of time to work on. On the other hand, a curve that looks very similar given by can be worked with easily. We find This yields the integral In this later case, finding the scalar integral of say can be accomplished with ease    The lesson of the last two examples is that computing scalar line integrals can be very easy, if the parameterization has nice speed . Otherwise, it can be an impossible task.    Scalar surface integrals  Another widely taught class of scalar integrals are scalar surface integrals. If is a surface in, say , we should think of as providing an infinitesimal measure of surface area. If is a scalar function on , the scalar surface integral is written as The first thing to note is that we can compute the pullback once we have a parameterization (although it is not always so pretty!). Indeed, suppose is parameterized by a function Then the vector fields from are One often finds these written as and we will use this notation as well. Then by equation we have As the example we are considering occurs in dimension three, we have a few other tricks up our sleeve. In particular, we have the cross product and, by our results from , we know that for a -dimensional inner product space . This gives the alternative (much more common) expression In turn, if is a smooth parameterization, we obtain the computational formula for scalar surface integrals (in ) Let us now make a couple of computations.   Scalar surface integral I   As is our habit, we start by deriving a classical formula. Let be the sphere centered at the origin of radius . Remember that this is the set of points in satisfying the equation and describes the surface boundary of the -dimensional ball of radius . We may parameterize this using spherical coordinates and fixing . This gives where . Calculating the tangent fields From we have Using this we obtain Of course, this is yet another confirmation that the formulas we learn in elementary school do indeed hold! However, now we can also compute other quantities on the sphere fairly easily using our computations here. For example, if denotes the density of a substance on the sphere of radius we can find the total amount of this substance on the sphere by computing the scalar integral    In general, it can be a difficult task to parameterize any -dimensional subspace of , even when this subspace is a curve or a surface. However, there are cases where an easy parameterization is part of the description of the surface , namely when it is the graph of some differentiable function . In this case, we can use the parameterization given by Computing the tangent fields on associated to gives From we have Thus, for such surfaces, we obtain a formula for the scalar integral of  If a student protests at this point with the comment This formula looks awful , my response will be: correct, but who told you life wasn't awful!   Scalar surface integral II   Suppose is the graph of over the domain and we wish to integrate the scalar function We compute the surface area form first by finding Using this, we compute our surface integral following formula        Let with be a helix arc. Compute the length of the curve traced by .    Let be the graph a differentiable function over and What is the scalar integral     Let be the cone of height and top radius  Find the surface area of by computing a scalar surface integral.    Let be the hemisphere Compute the surface scalar integral     Show that formula holds.    Show that formula holds.    "
},
{
  "id": "sec-scalarintegrals-2-1",
  "level": "2",
  "url": "sec-scalarintegrals.html#sec-scalarintegrals-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "volume orientation volume form "
},
{
  "id": "def-scalar-integral",
  "level": "2",
  "url": "sec-scalarintegrals.html#def-scalar-integral",
  "type": "Definition",
  "number": "4.2.1",
  "title": "",
  "body": "   Scalar integral    Let be smooth oriented -dimensional subspace of and a scalar function on . The scalar integral of on is the integral   "
},
{
  "id": "sec-scalarintegrals-2-4",
  "level": "2",
  "url": "sec-scalarintegrals.html#sec-scalarintegrals-2-4",
  "type": "Proposition",
  "number": "4.2.2",
  "title": "",
  "body": "  Let be smooth oriented -dimensional subspace of . The volume of is the scalar integral of given by   "
},
{
  "id": "prop-scalar",
  "level": "2",
  "url": "sec-scalarintegrals.html#prop-scalar",
  "type": "Proposition",
  "number": "4.2.3",
  "title": "",
  "body": "  Let be smooth oriented -dimensional subspace of , an domain in , an orientation preserving parameterization given by and a scalar function on . Let be the tangent vector field along . Then the scalar integral equals    To see this proposition holds, simply note that is a basis for the tangent space at (at any given point). This follows from the definition of parameterizations. Taking to be the dual cotangent vector, it is an exercise to show that Now, since both and are oriented bases for with the former an orthonormal basis, and since is -dimensional, we have that The dual statement to this is that Thus we obtain the formula for the pullback of relative to  Putting this into the formula for the integral of an -form on gives the result.   "
},
{
  "id": "sec-scalarintegrals-2-8",
  "level": "2",
  "url": "sec-scalarintegrals.html#sec-scalarintegrals-2-8",
  "type": "Proposition",
  "number": "4.2.4",
  "title": "",
  "body": "  The scalar integral is independent of the orientation of .   "
},
{
  "id": "subsec-scalar-line-integrals-2",
  "level": "2",
  "url": "sec-scalarintegrals.html#subsec-scalar-line-integrals-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar line integral "
},
{
  "id": "subsec-scalar-line-integrals-4",
  "level": "2",
  "url": "sec-scalarintegrals.html#subsec-scalar-line-integrals-4",
  "type": "Example",
  "number": "4.2.5",
  "title": "Scalar line integral I.",
  "body": " Scalar line integral I   Let be the circle in centered at the origin and of radius . This can be given by a parameterization via The most reasonable scalar integral to try here first is of the function which gives the circumference. For this, we need the tangent vector of and its norm so we calculate: This leads to the very simple integral In this case, because the norm of the tangent vector for our parameterization is constant, many other scalar integrals are accessible. For example, if were a mass density function on and we wanted to compute total mass, we use our prior computations and find   "
},
{
  "id": "subsec-scalar-line-integrals-6",
  "level": "2",
  "url": "sec-scalarintegrals.html#subsec-scalar-line-integrals-6",
  "type": "Example",
  "number": "4.2.6",
  "title": "Scalar line integral II.",
  "body": " Scalar line integral II   Suppose we want to compute the length of the twisted cubic curve  for . We proceed by computing the tangent vector and its norm. This yields the integral Such an integral will require even the most advanced second semester calculus student a good amount of time to work on. On the other hand, a curve that looks very similar given by can be worked with easily. We find This yields the integral In this later case, finding the scalar integral of say can be accomplished with ease   "
},
{
  "id": "subsec-scalar-surface-integrals-2",
  "level": "2",
  "url": "sec-scalarintegrals.html#subsec-scalar-surface-integrals-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "scalar surface integral "
},
{
  "id": "subsec-scalar-surface-integrals-3",
  "level": "2",
  "url": "sec-scalarintegrals.html#subsec-scalar-surface-integrals-3",
  "type": "Example",
  "number": "4.2.7",
  "title": "Scalar surface integral I.",
  "body": " Scalar surface integral I   As is our habit, we start by deriving a classical formula. Let be the sphere centered at the origin of radius . Remember that this is the set of points in satisfying the equation and describes the surface boundary of the -dimensional ball of radius . We may parameterize this using spherical coordinates and fixing . This gives where . Calculating the tangent fields From we have Using this we obtain Of course, this is yet another confirmation that the formulas we learn in elementary school do indeed hold! However, now we can also compute other quantities on the sphere fairly easily using our computations here. For example, if denotes the density of a substance on the sphere of radius we can find the total amount of this substance on the sphere by computing the scalar integral   "
},
{
  "id": "subsec-scalar-surface-integrals-5",
  "level": "2",
  "url": "sec-scalarintegrals.html#subsec-scalar-surface-integrals-5",
  "type": "Example",
  "number": "4.2.8",
  "title": "Scalar surface integral II.",
  "body": " Scalar surface integral II   Suppose is the graph of over the domain and we wish to integrate the scalar function We compute the surface area form first by finding Using this, we compute our surface integral following formula    "
},
{
  "id": "exe-scalarintegrals-1",
  "level": "2",
  "url": "sec-scalarintegrals.html#exe-scalarintegrals-1",
  "type": "Exercise",
  "number": "4.2.3.1",
  "title": "",
  "body": " Let with be a helix arc. Compute the length of the curve traced by .  "
},
{
  "id": "exe-scalarintegrals-2",
  "level": "2",
  "url": "sec-scalarintegrals.html#exe-scalarintegrals-2",
  "type": "Exercise",
  "number": "4.2.3.2",
  "title": "",
  "body": " Let be the graph a differentiable function over and What is the scalar integral   "
},
{
  "id": "exe-scalarintegrals-3",
  "level": "2",
  "url": "sec-scalarintegrals.html#exe-scalarintegrals-3",
  "type": "Exercise",
  "number": "4.2.3.3",
  "title": "",
  "body": " Let be the cone of height and top radius  Find the surface area of by computing a scalar surface integral.  "
},
{
  "id": "exe-scalarintegrals-4",
  "level": "2",
  "url": "sec-scalarintegrals.html#exe-scalarintegrals-4",
  "type": "Exercise",
  "number": "4.2.3.4",
  "title": "",
  "body": " Let be the hemisphere Compute the surface scalar integral   "
},
{
  "id": "ex-spheresurfacearea",
  "level": "2",
  "url": "sec-scalarintegrals.html#ex-spheresurfacearea",
  "type": "Exercise",
  "number": "4.2.3.5",
  "title": "",
  "body": " Show that formula holds.  "
},
{
  "id": "ex-graphsurfacearea",
  "level": "2",
  "url": "sec-scalarintegrals.html#ex-graphsurfacearea",
  "type": "Exercise",
  "number": "4.2.3.6",
  "title": "",
  "body": " Show that formula holds.  "
},
{
  "id": "sec-vectorintegrals",
  "level": "1",
  "url": "sec-vectorintegrals.html",
  "type": "Section",
  "number": "4.3",
  "title": "Vector integrals",
  "body": " Vector integrals   Integrating differential -forms on an oriented smooth -dimensional subspace is extremely natural. On the other hand, integrating vector fields is very unnatural. The reason for this is that, while one can always pullback a differential form, vector fields require extra structure to be pulled back. This structure is a (possibly varying) inner product and, when we have it, we will be able to perform a vector integral in one of two different contexts. We will consider these integrals over subspaces in , so we will always use the ambient dot product for this inner product. In both types of integrals, we must accomplish the task of converting a vector field along a smooth oriented -dimensional subspace , into an -form.  We recall from equation that, given a vector field in , there is a dual -form which, for a tangent vector at is defined as Once we have such a one form, we can describe vector integration in a couple of ways.    Vector line integrals  One of the two types of vector integrals can be made by simply integration our dual form on a curve.     Tangent space    Given a smooth oriented curve in and a vector field defined at every point in , the vector line integral of along is the integral    As most introductory courses to multivariable calculus don't introduce differential forms, the formulas for vector line integrals appear slightly different. Let us give the more common formulas, which will also explain what is in the above notation.    Let be a smooth connected oriented curve in , a compatibly oriented parameterization, and a vector field defined at every point in . Then    To show this proposition holds, we need only write out the pullback . To do this, write the vector field in terms of the standard basis of tangent vectors It is common practice in these formulas to suppress the independent variables which make this vector field a varying field of vectors. However, for clarity, we rewrite this equation as to emphasize the dependence on the point . Then it is an exercise to show that our dual -form is Now, if is our parameterization, then we have On the other hand, we can compute the pullback to see that Putting this expression into the definition gives the formula.    Finally, one can also consider the vector integral of along as follows. Let be the unit tangent vector field along so that . Note this defines uniquely and is often used as a way to orient (instead of using differential forms).    Let be a smooth connected oriented curve in and a vector field defined at every point in . Then    Exercise.    Unlike scalar integrals, most vector line integrals of easily expressible fields can be integrated.   Vector line integral   Let be the oriented curve compatibly parameterized by from , and Then, computing    One major interpretation of a vector line integral is when the field is a force field like a gravitational field or electromagnetic field. A particle moves along the curve traced by the path . Then the work done by on the particle is precisely This has the same units as energy in physics, so it can be thought of as the amount of energy that a force exerts on a particle moving along a given curve.   Work as a vector line integral   There are a few examples of how one computes physical force fields like a gravitational field. In some cases, we are content to obtain an approximate constant field (for instance, if we are near the surface of the earth. Then our vector field may be something like, Then if is the oriented circular arc from to , we can compute the work done by gravity by taking the parameterization from to . Then computing gives Alternatively, one may be considering the gravitational field created by a body of mass at the origin on another body of mass . According to Newton's Law of Gravitation, this field is given by Here is a number called the gravitational constant.  Now, one may wish to compute the amount of energy that it would take to escape the gravitational pull of the mass starting at a point distance units away. We can clearly see that is symmetric about the origin, so we may as well consider a straight line curve parameterized by for . Computing the work done (against gravity) then gives As was mentioned above, work is a form of energy. Another form is kinetic energy which is of the form where is the speed of a particle. If one is planning to escape the gravity of a planet with a single burst, one then must have that the initial velocity satisfies the inequality or The quantity on the right is called the escape velocity (notice it is independent of ).    Another interpretation of the vector line integral is as the flow along a curve . This is most commonly used when is a closed curve which we now define.     Closed smooth subspace    A closed smooth -dimensional subspace is a space with empty boundary . In particular, a closed curve is a union of loops. If is closed and oriented, and is an -form, one may see the integral of written    Now, if is a velocity vector field of a fluid (for example), and the closed oriented curve is traced by the path , then the flow of along the curve is called the circulation of along and is the vector line integral It is fine to think of circulation of a force field as well as fluid velocity field (the term applies to both instances).   Line integral independent of the loop   Let be the circle of radius centered at the origin in the plane and oriented counter-clockwise. Let be an electric field. To find the circulation of around , we first parameterize by for and then compute Note that this integral is completely independent of ... a mystery that will be solved in the coming sections!      Flux integrals  Recall that, in the early part of this section we mentioned that there were two ways of integrating a vector field . The first, given above, is simply to take the dual differential -form and integrate it. This means that the domain you are integrating over is -dimensional, i.e. a curve. However, with differential forms (or exterior products in general), we had a lovely operation called the Hodge star operator which takes a -form in and turns it into an -form in . This leads to the next way to integrate a vector field.     Flux vector integral    Let be a smooth oriented -dimensional subspace of and a vector field defined along . The flux vector integral of on is defined as    The notation or is common for vector surface integrals in instead of . For curves, one often sees as well, but there does not seem to be a universally adopted notation for flux integrals outside of these cases (so try to be open to investigating what type of integral you are presented with!). Let us start with the case of to see how we should interpret this integral.  In with the standard orientation and dot product, we know that So if we have a vector field then This implies that the flux integral of along a curve in the plane is However, this may not get us closer to seeing the meaning of this integral. We can see this by considering the normal unit vector along the curve . Recall that the orientation of can be understood as the dual to the unit tangent vector . Taking negative of the Hodge star of is denoted Note that if at a point, then .  This vector field along is only available to us when , but in this case, we see that is just rotated clockwise by . It is thus orthogonal to the curve at every point and a unit vector.    Let be a smooth connected oriented curve in , a compatibly oriented parameterization and a vector field defined at every point of . Then    The second equation follows from equation . On the other hand, equation gives the form for the Hodge star of the dual of . One can check here that and Thus, using to relate the vector line integral to the scalar line integral gives Now, if at a point, then so that Putting this into the above equation gives the first line.    A student paying close attention may wonder what logic is behind the fact that is the negative of the star of instead of just the star. In fact, the last set of equations can be written more clearly using the fact that the Hodge star preserves dot products to see Now, recall that in the special case where we found that is just multiplying by . Thus which explains the need for the sign.  The first equation in gives us a way to interpret this integral. At every point on , the vector points perpendicular and to the right of the oriented curve. If one considers as a velocity field of a fluid, then is the component of the velocity that is `flowing through' the curve at the point. Integrating this over the entire curve gives the amount of fluid passing through the curve per unit time (or the total velocity of fluid through the curve, or the flux).   Flux integral computation   Let be the boundary of the square oriented counter-clockwise. Now is not a smooth curve due to the corners. However, we can break it into its four smooth sides, perform any needed integrals, and add up the results. Consider the vector field and suppose we wish to compute the flux integral As we mentioned, we can break this integral up into the sum where is the edge along the -axis and the remaining edges are ordered counter-clockwise. It is wise in these situations to employ a bit of thought before mindlessly computing. First, consider the scalar functions along each of the four sides. Note that points perpendicularly outward from the square (it is to the right going counter clockwise around). So along the bottom edge of we have . But along the bottom edge, we have so that . So along and the first integral is identically zero. A similar argument gives us that the last integral along is also zero. This leaves us with the integrals along and .  Along we will simply parameterize with for and use our formula to see Likewise, for we parameterize with for and use our formula to see Thus the flux of through is just    Having worked through the case of , we now tackle the popular case of . As this case is usually presented in isolation (i.e. not from the context of differential forms), it comes with its own notation and vocabulary which we now state.     Vector surface integral    Let be an oriented surface in and a vector field defined along . The vector surface integral of on is If is a closed surface, this is often written    There are again two important tasks to accomplish in this case. First, we would like to understand what this integral means and second, we would like to know how to compute it (at least in some cases). For the first task, we may generalize what was done for curves to the arbitrary -dimensional case. Let us work through this procedure for an -dimensional smooth subspace of and then apply it to . On we have the unit volume form which is an -form. Likewise, we have the -form . We may connect these two forms by finding the unit normal vector field  along for which Then we claim that, for any smooth parameterization of , we claim that To see this, note that is a unit normal vector to and, at any point in , we may find an oriented orthonormal basis of . The dual cotangent vectors then are and . Now that we have a basis, we can write at as the linear combination Its dual is then Now we note that as a cotangent vector. On the other hand, by Proposition~\\label{prop:Hodgeformula} the Hodge star is a wedge product containing the factor . But then the pullback for every and, using linearity, we are left with verifying the claim. Now, integrating an -form on an -dimensional subspace only depends on the pullbacks of that form over local parameterizations. So the integral of is the same as the integral of and we obtain the following proposition.    The vector flux integral of along can be computed as the scalar integral    Note that in the case of curves in , . For surfaces, is the unit normal vector field to the surface. This leads to the simple interpretation that the infinitesimal quantity along at a point represents the amount of flowing through the surface in the direction of per unit time (for a velocity field). The full integral then expresses the total amount of flow through in the direction of per unit time (also called the flux of through ).  For surfaces, this can easily be calculated for a given parameterization by normalizing the cross-product In other words, we have an explicit formula in this case which is On the other hand, equation gives us that Putting these together with gives an explicit formula for vector surface integrals.    Suppose is an oriented surface in and is a vector field along . Let be a compatibly oriented parameterization of with Then    Now, it would be foolish of me to assert that computing such an integral is not a daunting task ... it can be. However, there are occasions when it is not as bad as it looks. One class of cases would be when we have that is the graph . You may have computed in the previous section's exercises that, in this case, we have Of course, such an explicit form can then be used in our computations.   Vector surface integrals   Let be the graph over the rectangle oriented so that its projection to the plane is counter-clockwise. Taking the vector field we can then compute the vector surface integral      Let be the triangle with vertices and oriented counter-clockwise and the vector field .  Compute the vector line integral    Compute the flux line integral     Let be the ellipse given by oriented counter-clockwise and the vector field . Compute the vector line integral     A fundamental principle in physics is conservation of energy. One case of this is that if is a constant gravitational force, then the work done by on a particle starting at height and ending at height does not depend on the path that was taken from to . Explain why the principle holds in this case.    Explain why equation is true.    Suppose is an oriented surface in and is a vector field which is tangent to . In other words, at any point of , the tangent field vector is in . What is Explain your response.    Let be the graph over the rectangle oriented so that its projection to the plane is counter-clockwise. Let be the vector field . Compute the vector surface integral     Let be the sphere of radius centered at the origin oriented outwardly and be the gravitational vector field between two point masses. Without parameterizing or using spherical coordinates, compute the vector surface integral    "
},
{
  "id": "def-vectorlineintegral",
  "level": "2",
  "url": "sec-vectorintegrals.html#def-vectorlineintegral",
  "type": "Definition",
  "number": "4.3.1",
  "title": "",
  "body": "   Tangent space    Given a smooth oriented curve in and a vector field defined at every point in , the vector line integral of along is the integral   "
},
{
  "id": "prop-lin-int-formula",
  "level": "2",
  "url": "sec-vectorintegrals.html#prop-lin-int-formula",
  "type": "Proposition",
  "number": "4.3.2",
  "title": "",
  "body": "  Let be a smooth connected oriented curve in , a compatibly oriented parameterization, and a vector field defined at every point in . Then    To show this proposition holds, we need only write out the pullback . To do this, write the vector field in terms of the standard basis of tangent vectors It is common practice in these formulas to suppress the independent variables which make this vector field a varying field of vectors. However, for clarity, we rewrite this equation as to emphasize the dependence on the point . Then it is an exercise to show that our dual -form is Now, if is our parameterization, then we have On the other hand, we can compute the pullback to see that Putting this expression into the definition gives the formula.   "
},
{
  "id": "subsec-vector-line-integrals-6",
  "level": "2",
  "url": "sec-vectorintegrals.html#subsec-vector-line-integrals-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unit tangent vector field "
},
{
  "id": "prop-vectorscalar",
  "level": "2",
  "url": "sec-vectorintegrals.html#prop-vectorscalar",
  "type": "Proposition",
  "number": "4.3.3",
  "title": "",
  "body": "  Let be a smooth connected oriented curve in and a vector field defined at every point in . Then    Exercise.   "
},
{
  "id": "subsec-vector-line-integrals-9",
  "level": "2",
  "url": "sec-vectorintegrals.html#subsec-vector-line-integrals-9",
  "type": "Example",
  "number": "4.3.4",
  "title": "Vector line integral.",
  "body": " Vector line integral   Let be the oriented curve compatibly parameterized by from , and Then, computing   "
},
{
  "id": "subsec-vector-line-integrals-10",
  "level": "2",
  "url": "sec-vectorintegrals.html#subsec-vector-line-integrals-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "work "
},
{
  "id": "subsec-vector-line-integrals-11",
  "level": "2",
  "url": "sec-vectorintegrals.html#subsec-vector-line-integrals-11",
  "type": "Example",
  "number": "4.3.5",
  "title": "Work as a vector line integral.",
  "body": " Work as a vector line integral   There are a few examples of how one computes physical force fields like a gravitational field. In some cases, we are content to obtain an approximate constant field (for instance, if we are near the surface of the earth. Then our vector field may be something like, Then if is the oriented circular arc from to , we can compute the work done by gravity by taking the parameterization from to . Then computing gives Alternatively, one may be considering the gravitational field created by a body of mass at the origin on another body of mass . According to Newton's Law of Gravitation, this field is given by Here is a number called the gravitational constant.  Now, one may wish to compute the amount of energy that it would take to escape the gravitational pull of the mass starting at a point distance units away. We can clearly see that is symmetric about the origin, so we may as well consider a straight line curve parameterized by for . Computing the work done (against gravity) then gives As was mentioned above, work is a form of energy. Another form is kinetic energy which is of the form where is the speed of a particle. If one is planning to escape the gravity of a planet with a single burst, one then must have that the initial velocity satisfies the inequality or The quantity on the right is called the escape velocity (notice it is independent of ).   "
},
{
  "id": "subsec-vector-line-integrals-12",
  "level": "2",
  "url": "sec-vectorintegrals.html#subsec-vector-line-integrals-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "flow along a curve "
},
{
  "id": "def-closed-smooth-subspace",
  "level": "2",
  "url": "sec-vectorintegrals.html#def-closed-smooth-subspace",
  "type": "Definition",
  "number": "4.3.6",
  "title": "",
  "body": "   Closed smooth subspace    A closed smooth -dimensional subspace is a space with empty boundary . In particular, a closed curve is a union of loops. If is closed and oriented, and is an -form, one may see the integral of written   "
},
{
  "id": "subsec-vector-line-integrals-14",
  "level": "2",
  "url": "sec-vectorintegrals.html#subsec-vector-line-integrals-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "circulation "
},
{
  "id": "ex-twopilineint",
  "level": "2",
  "url": "sec-vectorintegrals.html#ex-twopilineint",
  "type": "Example",
  "number": "4.3.7",
  "title": "Line integral independent of the loop.",
  "body": " Line integral independent of the loop   Let be the circle of radius centered at the origin in the plane and oriented counter-clockwise. Let be an electric field. To find the circulation of around , we first parameterize by for and then compute Note that this integral is completely independent of ... a mystery that will be solved in the coming sections!   "
},
{
  "id": "def-fluxvectorint",
  "level": "2",
  "url": "sec-vectorintegrals.html#def-fluxvectorint",
  "type": "Definition",
  "number": "4.3.8",
  "title": "",
  "body": "   Flux vector integral    Let be a smooth oriented -dimensional subspace of and a vector field defined along . The flux vector integral of on is defined as   "
},
{
  "id": "prop-fluxline",
  "level": "2",
  "url": "sec-vectorintegrals.html#prop-fluxline",
  "type": "Proposition",
  "number": "4.3.9",
  "title": "",
  "body": "  Let be a smooth connected oriented curve in , a compatibly oriented parameterization and a vector field defined at every point of . Then    The second equation follows from equation . On the other hand, equation gives the form for the Hodge star of the dual of . One can check here that and Thus, using to relate the vector line integral to the scalar line integral gives Now, if at a point, then so that Putting this into the above equation gives the first line.   "
},
{
  "id": "subsec-flux-integrals-10",
  "level": "2",
  "url": "sec-vectorintegrals.html#subsec-flux-integrals-10",
  "type": "Example",
  "number": "4.3.10",
  "title": "Flux integral computation.",
  "body": " Flux integral computation   Let be the boundary of the square oriented counter-clockwise. Now is not a smooth curve due to the corners. However, we can break it into its four smooth sides, perform any needed integrals, and add up the results. Consider the vector field and suppose we wish to compute the flux integral As we mentioned, we can break this integral up into the sum where is the edge along the -axis and the remaining edges are ordered counter-clockwise. It is wise in these situations to employ a bit of thought before mindlessly computing. First, consider the scalar functions along each of the four sides. Note that points perpendicularly outward from the square (it is to the right going counter clockwise around). So along the bottom edge of we have . But along the bottom edge, we have so that . So along and the first integral is identically zero. A similar argument gives us that the last integral along is also zero. This leaves us with the integrals along and .  Along we will simply parameterize with for and use our formula to see Likewise, for we parameterize with for and use our formula to see Thus the flux of through is just   "
},
{
  "id": "def-vector-surface-integral",
  "level": "2",
  "url": "sec-vectorintegrals.html#def-vector-surface-integral",
  "type": "Definition",
  "number": "4.3.11",
  "title": "",
  "body": "   Vector surface integral    Let be an oriented surface in and a vector field defined along . The vector surface integral of on is If is a closed surface, this is often written   "
},
{
  "id": "subsec-flux-integrals-13",
  "level": "2",
  "url": "sec-vectorintegrals.html#subsec-flux-integrals-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unit normal vector field "
},
{
  "id": "prop-fluxintegrals",
  "level": "2",
  "url": "sec-vectorintegrals.html#prop-fluxintegrals",
  "type": "Proposition",
  "number": "4.3.12",
  "title": "",
  "body": "  The vector flux integral of along can be computed as the scalar integral   "
},
{
  "id": "subsec-flux-integrals-17",
  "level": "2",
  "url": "sec-vectorintegrals.html#subsec-flux-integrals-17",
  "type": "Proposition",
  "number": "4.3.13",
  "title": "",
  "body": "  Suppose is an oriented surface in and is a vector field along . Let be a compatibly oriented parameterization of with Then   "
},
{
  "id": "subsec-flux-integrals-19",
  "level": "2",
  "url": "sec-vectorintegrals.html#subsec-flux-integrals-19",
  "type": "Example",
  "number": "4.3.14",
  "title": "Vector surface integrals.",
  "body": " Vector surface integrals   Let be the graph over the rectangle oriented so that its projection to the plane is counter-clockwise. Taking the vector field we can then compute the vector surface integral   "
},
{
  "id": "exe-vectorintegrals-1",
  "level": "2",
  "url": "sec-vectorintegrals.html#exe-vectorintegrals-1",
  "type": "Exercise",
  "number": "4.3.3.1",
  "title": "",
  "body": "Let be the triangle with vertices and oriented counter-clockwise and the vector field .  Compute the vector line integral    Compute the flux line integral   "
},
{
  "id": "exe-vectorintegrals-2",
  "level": "2",
  "url": "sec-vectorintegrals.html#exe-vectorintegrals-2",
  "type": "Exercise",
  "number": "4.3.3.2",
  "title": "",
  "body": " Let be the ellipse given by oriented counter-clockwise and the vector field . Compute the vector line integral   "
},
{
  "id": "exe-vectorintegrals-3",
  "level": "2",
  "url": "sec-vectorintegrals.html#exe-vectorintegrals-3",
  "type": "Exercise",
  "number": "4.3.3.3",
  "title": "",
  "body": " A fundamental principle in physics is conservation of energy. One case of this is that if is a constant gravitational force, then the work done by on a particle starting at height and ending at height does not depend on the path that was taken from to . Explain why the principle holds in this case.  "
},
{
  "id": "exe-vectorintegrals-4",
  "level": "2",
  "url": "sec-vectorintegrals.html#exe-vectorintegrals-4",
  "type": "Exercise",
  "number": "4.3.3.4",
  "title": "",
  "body": " Explain why equation is true.  "
},
{
  "id": "exe-vectorintegrals-5",
  "level": "2",
  "url": "sec-vectorintegrals.html#exe-vectorintegrals-5",
  "type": "Exercise",
  "number": "4.3.3.5",
  "title": "",
  "body": " Suppose is an oriented surface in and is a vector field which is tangent to . In other words, at any point of , the tangent field vector is in . What is Explain your response.  "
},
{
  "id": "exe-vectorintegrals-6",
  "level": "2",
  "url": "sec-vectorintegrals.html#exe-vectorintegrals-6",
  "type": "Exercise",
  "number": "4.3.3.6",
  "title": "",
  "body": " Let be the graph over the rectangle oriented so that its projection to the plane is counter-clockwise. Let be the vector field . Compute the vector surface integral   "
},
{
  "id": "exercise-gravitysurface",
  "level": "2",
  "url": "sec-vectorintegrals.html#exercise-gravitysurface",
  "type": "Exercise",
  "number": "4.3.3.7",
  "title": "",
  "body": " Let be the sphere of radius centered at the origin oriented outwardly and be the gravitational vector field between two point masses. Without parameterizing or using spherical coordinates, compute the vector surface integral  "
},
{
  "id": "sec-derivatives",
  "level": "1",
  "url": "sec-derivatives.html",
  "type": "Section",
  "number": "5.1",
  "title": "Derivatives",
  "body": " Derivatives   Having discussed all of the different types of integrals of interest to us, we return for a moment to derivatives.    Exterior derivative  The exterior derivative is not only a derivative of functions, but of forms themselves. For the remainder of the course, we will assume all forms have coefficient functions that have continuous second partial derivatives.     Exterior derivative    Let be a differential -form in . The exterior derivative of is the -form    Let us compute a few examples.   Exterior derivative of a scalar function   For a differentiable function on an open set , which is a -form by definition, of , we recall So, for example if then This is just one way of expressing the derivative of a scalar function.     Exterior derivative of a -form   Now suppose we have a one form in like Then     Exterior derivative of a -form   For the -form one calculates     Exterior derivative of a top form   Note that for a top form, we always have that its exterior derivative is zero. For example, if in , then    There are a few important properties about the exterior derivative that make it easier to work with.    The exterior derivative satisfies the following properties.    Naturality If is a differentiable map from an open set to and is a differential -form on then   Linearity If and are real numbers, and are -forms then   Leibniz Rule For an -form and -form    Square Zero For any -form , .     We leave the first two properties as exercises. For the last property, we first check this for a scalar function (i.e. a -form). Now, for all summands in the last expression with , we have , so these vanish. The remaining summands come in pairs and we obtain Here we used our blanket assumption that has continuous second partial derivatives and then applied Clairaut's Theorem. For -forms with , we may use linearity and relabel the indices of the variables (if needed) and verify the property for Then, using the Leibniz rule for forms, we obtain    These properties have led mathematicians and physicists to consider the vector space of all differential forms on some -dimensional open subset of (and more generally, a smooth -dimensional subspace ). They write for the vector space of differential -forms and for the vector space of all differential forms on . Then the exterior derivative leads to a sequence of linear maps where the composition of any two of these is identically zero. Note that also has a product given by wedging forms together. Taken altogether, is called the de Rham complex and has occupied a great deal of attention for the past years. While a difficult object to understand at first, it unifies many previously independent theorems into one cohesive framework and thereby amplifies potential applications.    Gradient  We have already seen the definition that the gradient of a function on an open set in Euclidean space is the vector field While it is of no great surprise, we must record the following simple proposition.    For a scalar function on an open subspace of Euclidean space, In words, the dual of the gradient is the exterior derivative of .    In fact, in more advanced settings where one must use a varying inner product because the space being dealt with is not flat, equation gives an alternative definition of the gradient.  As we have already studied the main properties of the gradient, we leave this as a reminder that such a derivative exists which takes a scalar field to a vector field so can be considered as a map where is the vector space of scalar functions on and is the vector space of vector fields.    Curl  The next derivative we consider is rather unique and only occurs in dimension (although there is something called -dimensional curl which we will discuss later in this section).     Curl    For a differentiable vector field defined on an open subset of , the curl of is the vector field    This rather cryptic definition has an alternative notation that is more suggestive of the formula Let us compute an example to see how this helps.   Curl computation   Let We use the suggestive formula to compute its curl    The geometric interpretation of curl is that it measures the infinitesimal rotation of the vector field . In particular, the vector at gives the axis of rotation that the field is rotating about and its magnitude expresses the strength of the rotation.  Note that curl takes vector fields to vector fields, so we can think of it as a linear map In fact, we can connect this new derivative with the exterior derivative as follows.    For a differentiable vector field defined on an open subset of endowed with the dot product and standard orientation,    In other words, the curl of is the dual vector field of the Hodge star of the exterior derivative of the dual -form of !    Two dimensional curl  There is a version of curl for dimensions.     Two dimensional curl    Let be a differentiable vector field on a region in . The two dimensional curl of is the scalar function    Note that two dimensional curl takes vector fields to scalar functions, so we can think of it as a linear map The two dimensional curl is a version of the curl in the sense that if we think of as a vector field on then Again, this derivative can be related to the exterior derivative.    Let be a differentiable vector field defined on an open set in the Euclidean plane equipped with the dot product and the standard orientation. Then    The interpretation of two dimensional curl is that it gives a scalar measure of the infinitesimal counter-clockwise rotation of the field at a point.    Divergence  The last derivative we consider takes a vector field and produces a scalar function on a domain in .     Divergence    Let be a differentiable vector field defined on an open set in Euclidean space . The divergence of is the function    While the formula for the divergence is much easier to remember, there is still an alternative suggestive notation Let's compute an example.   Divergence computation   Suppose in . Then    The divergence of a vector field is a measure of how much the vector field spreads or collapses at a given point. This viewpoint will become especially clear after the Divergence Theorem.  Note that divergence takes vector fields to scalar functions, so we can think of it as a linear map Relating this derivative to forms can be done as follows.    Let be a differentiable vector field defined on an open set in Euclidean space equipped with the dot product and the standard orientation. Then    Again we see that our new derivative is but a shadow of the exterior derivative (along with the linear algebra of dualizing and Hodge stars).    Compute the exterior derivative of the following forms.          Compute the curl of the following vector fields.  The linear field    The gravitational force field    Compute the divergence of the following vector fields.  The field    The gravitational force field     Verify the Liebniz rule of exterior derivatives when and are differential -forms in .    Verify .    Verify .    Let be an open subset of -dimensional Euclidean space. Using only the square zero property, , , and show that for any twice differentiable function and vector field defined on we have    "
},
{
  "id": "def-exterior-derivative-forms",
  "level": "2",
  "url": "sec-derivatives.html#def-exterior-derivative-forms",
  "type": "Definition",
  "number": "5.1.1",
  "title": "",
  "body": "   Exterior derivative    Let be a differential -form in . The exterior derivative of is the -form   "
},
{
  "id": "subsec-exterior-derivative-5",
  "level": "2",
  "url": "sec-derivatives.html#subsec-exterior-derivative-5",
  "type": "Example",
  "number": "5.1.2",
  "title": "Exterior derivative of a scalar function.",
  "body": " Exterior derivative of a scalar function   For a differentiable function on an open set , which is a -form by definition, of , we recall So, for example if then This is just one way of expressing the derivative of a scalar function.   "
},
{
  "id": "subsec-exterior-derivative-6",
  "level": "2",
  "url": "sec-derivatives.html#subsec-exterior-derivative-6",
  "type": "Example",
  "number": "5.1.3",
  "title": "Exterior derivative of a <span class=\"process-math\">\\(1\\)<\/span>-form.",
  "body": " Exterior derivative of a -form   Now suppose we have a one form in like Then   "
},
{
  "id": "subsec-exterior-derivative-7",
  "level": "2",
  "url": "sec-derivatives.html#subsec-exterior-derivative-7",
  "type": "Example",
  "number": "5.1.4",
  "title": "Exterior derivative of a <span class=\"process-math\">\\(2\\)<\/span>-form.",
  "body": " Exterior derivative of a -form   For the -form one calculates   "
},
{
  "id": "subsec-exterior-derivative-8",
  "level": "2",
  "url": "sec-derivatives.html#subsec-exterior-derivative-8",
  "type": "Example",
  "number": "5.1.5",
  "title": "Exterior derivative of a top form.",
  "body": " Exterior derivative of a top form   Note that for a top form, we always have that its exterior derivative is zero. For example, if in , then   "
},
{
  "id": "prop-extder-properties",
  "level": "2",
  "url": "sec-derivatives.html#prop-extder-properties",
  "type": "Proposition",
  "number": "5.1.6",
  "title": "",
  "body": "  The exterior derivative satisfies the following properties.    Naturality If is a differentiable map from an open set to and is a differential -form on then   Linearity If and are real numbers, and are -forms then   Leibniz Rule For an -form and -form    Square Zero For any -form , .     We leave the first two properties as exercises. For the last property, we first check this for a scalar function (i.e. a -form). Now, for all summands in the last expression with , we have , so these vanish. The remaining summands come in pairs and we obtain Here we used our blanket assumption that has continuous second partial derivatives and then applied Clairaut's Theorem. For -forms with , we may use linearity and relabel the indices of the variables (if needed) and verify the property for Then, using the Leibniz rule for forms, we obtain   "
},
{
  "id": "prop-gradientformula",
  "level": "2",
  "url": "sec-derivatives.html#prop-gradientformula",
  "type": "Proposition",
  "number": "5.1.7",
  "title": "",
  "body": "  For a scalar function on an open subspace of Euclidean space, In words, the dual of the gradient is the exterior derivative of .   "
},
{
  "id": "def-curl",
  "level": "2",
  "url": "sec-derivatives.html#def-curl",
  "type": "Definition",
  "number": "5.1.8",
  "title": "",
  "body": "   Curl    For a differentiable vector field defined on an open subset of , the curl of is the vector field   "
},
{
  "id": "subsec-curl-5",
  "level": "2",
  "url": "sec-derivatives.html#subsec-curl-5",
  "type": "Example",
  "number": "5.1.9",
  "title": "Curl computation.",
  "body": " Curl computation   Let We use the suggestive formula to compute its curl   "
},
{
  "id": "prop-curlformula",
  "level": "2",
  "url": "sec-derivatives.html#prop-curlformula",
  "type": "Proposition",
  "number": "5.1.10",
  "title": "",
  "body": "  For a differentiable vector field defined on an open subset of endowed with the dot product and standard orientation,   "
},
{
  "id": "def-2dcurl",
  "level": "2",
  "url": "sec-derivatives.html#def-2dcurl",
  "type": "Definition",
  "number": "5.1.11",
  "title": "",
  "body": "   Two dimensional curl    Let be a differentiable vector field on a region in . The two dimensional curl of is the scalar function   "
},
{
  "id": "prop-2dcurlformula",
  "level": "2",
  "url": "sec-derivatives.html#prop-2dcurlformula",
  "type": "Proposition",
  "number": "5.1.12",
  "title": "",
  "body": "  Let be a differentiable vector field defined on an open set in the Euclidean plane equipped with the dot product and the standard orientation. Then   "
},
{
  "id": "def-divergence",
  "level": "2",
  "url": "sec-derivatives.html#def-divergence",
  "type": "Definition",
  "number": "5.1.13",
  "title": "",
  "body": "   Divergence    Let be a differentiable vector field defined on an open set in Euclidean space . The divergence of is the function   "
},
{
  "id": "subsec-divergence-5",
  "level": "2",
  "url": "sec-derivatives.html#subsec-divergence-5",
  "type": "Example",
  "number": "5.1.14",
  "title": "Divergence computation.",
  "body": " Divergence computation   Suppose in . Then   "
},
{
  "id": "prop-divergenceformula",
  "level": "2",
  "url": "sec-derivatives.html#prop-divergenceformula",
  "type": "Proposition",
  "number": "5.1.15",
  "title": "",
  "body": "  Let be a differentiable vector field defined on an open set in Euclidean space equipped with the dot product and the standard orientation. Then   "
},
{
  "id": "exe-derivatives-1",
  "level": "2",
  "url": "sec-derivatives.html#exe-derivatives-1",
  "type": "Exercise",
  "number": "5.1.6.1",
  "title": "",
  "body": "Compute the exterior derivative of the following forms.         "
},
{
  "id": "exe-derivatives-2",
  "level": "2",
  "url": "sec-derivatives.html#exe-derivatives-2",
  "type": "Exercise",
  "number": "5.1.6.2",
  "title": "",
  "body": "Compute the curl of the following vector fields.  The linear field    The gravitational force field   "
},
{
  "id": "exe-derivatives-3",
  "level": "2",
  "url": "sec-derivatives.html#exe-derivatives-3",
  "type": "Exercise",
  "number": "5.1.6.3",
  "title": "",
  "body": "Compute the divergence of the following vector fields.  The field    The gravitational force field   "
},
{
  "id": "exe-derivatives-4",
  "level": "2",
  "url": "sec-derivatives.html#exe-derivatives-4",
  "type": "Exercise",
  "number": "5.1.6.4",
  "title": "",
  "body": " Verify the Liebniz rule of exterior derivatives when and are differential -forms in .  "
},
{
  "id": "exe-derivatives-5",
  "level": "2",
  "url": "sec-derivatives.html#exe-derivatives-5",
  "type": "Exercise",
  "number": "5.1.6.5",
  "title": "",
  "body": " Verify .  "
},
{
  "id": "exe-derivatives-6",
  "level": "2",
  "url": "sec-derivatives.html#exe-derivatives-6",
  "type": "Exercise",
  "number": "5.1.6.6",
  "title": "",
  "body": " Verify .  "
},
{
  "id": "exercise-compzero",
  "level": "2",
  "url": "sec-derivatives.html#exercise-compzero",
  "type": "Exercise",
  "number": "5.1.6.7",
  "title": "",
  "body": " Let be an open subset of -dimensional Euclidean space. Using only the square zero property, , , and show that for any twice differentiable function and vector field defined on we have  "
},
{
  "id": "sec-stokes",
  "level": "1",
  "url": "sec-stokes.html",
  "type": "Section",
  "number": "5.2",
  "title": "Stokes’ Theorem",
  "body": " Stokes' Theorem  We now present one of the most beautiful theorems ever construed by humans. To state it, we first need to talk a little about smooth subspaces with boundary. The positive half-ball of radius in is the subspace We write for the boundary of consisting of points . We write for the usual open ball of radius in .     Smooth subspace with boundary    A subset of is a smooth -dimensional subspace with boundary if every point in there is either a smooth parameterization or with . The boundary of is the subspace of points in the images over all parameterizations from to .    Usually, there are a few other conditions for a smooth subspace with boundary, but we will not need these extra conditions for our purposes. However, let us clarify in this case what is meant by `parameterization'. Here, we mean that is a 1-1 correspondence between either or and the intersection where is an open ball around . If is not a boundary point, then we can take the radius of small enough that is the parameterization, whereas when is on the boundary, we must use as the domain of .  We will also need the notion of a compatible orientation.     Compatibly oriented boundary    Let be a smooth oriented -dimensional space with boundary. Then has an orientation for which, if is the outward unit normal of along and is its dual, then We say that has the boundary orientation.    Let us look at a few example to see how this works.   One dimensional subspace with boundary   The most elementary example is an interval in . The boundary, of course, is . Let us take the standard orientation on . We see that the outward pointing normal vector at is and at is . The dual cotangent vectors are and respectively, which means that the orientation of the boundary is at and at . Notice that this is indeed an orientation of a -dimensional subspace because the top forms are scalar functions.    A more common example discussed is the following.   Two dimensional subspace with boundary I   Let be the closure of an open set in and orient with the standard orientation . Suppose is on the boundary , is the dual of the normal vector pointing outward, and is the unit tangent vector of positively pairs with the orientation . Since we must have that is a counter-clockwise rotation of to ensure that .  One way to remember this is to say that the orientation of the boundary is always made so that the interior is to the left of the direction of travel.     Two dimensional subspace with boundary II   For an oriented surface in we take as the normal vector to the surface inducing the orientation (so that ). Along the boundary there is an outward pointing normal vector field which is tangent to and orthogonal to . If is the oriented unit tangent field along the boundary, then forms the orthonormal basis (also known as a frame) of the tangent space for each . The way to remember this is to imagine moving along the boundary of in such a way that the orientation is up and the surface is to your left.     Three dimensional subspace with boundary   A last example to understand is that of a region which is the closure of an open set and inherits the standard orientation . In this case, if is the outward pointing unit normal vector to then it must also compatibly orient (i.e. ). This is because, by the definition of the Hodge star operator in equation , we have    Now that we know how to compatibly orient smooth boundaries, we need only one additional technical condition before we may state the main theorem. We have discussed compactness before, but not quite defined it completely, nor will we now. Instead, we give a version of compactness that works for us. We say that a smooth -dimensional subspace (with or without boundary) is compact, if there are a finite number of parameterizations with and with which cover . This means that the union of the images equal as in the equality   Stokes' Theorem   Let be a smooth compact oriented -dimensional subspace of and a differentiable -form on . Then    First we will require the existence of a partition of unity subordinate to the cover of . For our purposes, we cover of by a finite number of parameterizations as in equation . Writing and , a partition of unity subordinate to this cover is a set of smooth maps for which there is some where   for all and all ,   for all and all ,  The sum satisfies the equality  The existence of such a partition of unity can be found in any analysis book and is obtained by defining, for each and , a smooth bump function which is nonzero on the complement of the union of all open sets except the given (or ) and zero off of of it. Then adding these functions together and dividing each one by the resulting sum produces a collection and . We leave the details for the references and proceed with the proof.  Now, we may extend each and to smooth functions on all of by taking them to be zero off of and respectively. Doing so, and using property (3) along with linearity of the exterior derivative, gives us an equality of forms Since integration of forms is also linear, we may prove equation for the forms and and the theorem will follow.  The advantage of (and ) over itself, is that when we pull these back along (and ) respectively and write them in coordinates as we have that for with and . Clearly, this then also holds for the exterior derivative Now, consider the cube in . Then since is zero outside for every , we have that the form and its exterior derivative is as well. Thus if we integrate we obtain Now, since every has continuous second derivatives, each of the partials are continuous and so integrable. Thus, letting we may apply Fubini's Theorem and integrate the -th variable first in the -th summand for to obtain This follows from the fact that is zero outside of the ball of radius . Thus, the -th summand is all that remains. Take , and orient it with (where the subscript denotes the dimension) so that . Note that this means that is compatibly oriented as the part of the boundary of . Then, letting we obtain Putting equations and together with equation gives for every . On the other hand, equation holds for every (including ) when is replaced by since (or an extension of it) vanishes on the boundary of . This implies for all . As was mentioned earlier, combining these results with linearity of integration and equation gives the theorem.    The elegant equation can be summarized verbally as the idea that the integral of a derivative of a form on an -dimensional space equals the integral of the form on the boundary. The proof of Stokes' Theorem is provided up to some technical results which will be outsourced.   Application of Stokes' Theorem for    Theorem      Fundamental Theorem of Calculus          Fundamental Theorem of Line Integrals   any    Green's      Classical Stokes'      Divergence       Stokes' Theorem has several consequences and instances, some major cases listed in . One basic corollary is that when is a closed smooth oriented subspace then certain integrals vanish.    Let be a smooth oriented -dimensional closed subspace of and a differential -form. Then    This can be seen by removing a small ball in so that . The boundary of both and are the same space , with opposite orientations. So      Let be the annulus in given by the inequalities and oriented with . Describe the boundary and its compatible orientation.    Suppose is the region in described by the inequalities and oriented with . Describe the boundary and its compatible orientation.    Let be the oriented surface in defined by oriented away from the -axis. Calculate    For any positive real number let be the -dimensional sphere of radius . Let and show that, for any and      "
},
{
  "id": "def-subspace-with-boundary",
  "level": "2",
  "url": "sec-stokes.html#def-subspace-with-boundary",
  "type": "Definition",
  "number": "5.2.1",
  "title": "",
  "body": "   Smooth subspace with boundary    A subset of is a smooth -dimensional subspace with boundary if every point in there is either a smooth parameterization or with . The boundary of is the subspace of points in the images over all parameterizations from to .   "
},
{
  "id": "def-oriented-boundary",
  "level": "2",
  "url": "sec-stokes.html#def-oriented-boundary",
  "type": "Definition",
  "number": "5.2.2",
  "title": "",
  "body": "   Compatibly oriented boundary    Let be a smooth oriented -dimensional space with boundary. Then has an orientation for which, if is the outward unit normal of along and is its dual, then We say that has the boundary orientation.   "
},
{
  "id": "sec-stokes-8",
  "level": "2",
  "url": "sec-stokes.html#sec-stokes-8",
  "type": "Example",
  "number": "5.2.3",
  "title": "One dimensional subspace with boundary.",
  "body": " One dimensional subspace with boundary   The most elementary example is an interval in . The boundary, of course, is . Let us take the standard orientation on . We see that the outward pointing normal vector at is and at is . The dual cotangent vectors are and respectively, which means that the orientation of the boundary is at and at . Notice that this is indeed an orientation of a -dimensional subspace because the top forms are scalar functions.   "
},
{
  "id": "sec-stokes-10",
  "level": "2",
  "url": "sec-stokes.html#sec-stokes-10",
  "type": "Example",
  "number": "5.2.4",
  "title": "Two dimensional subspace with boundary I.",
  "body": " Two dimensional subspace with boundary I   Let be the closure of an open set in and orient with the standard orientation . Suppose is on the boundary , is the dual of the normal vector pointing outward, and is the unit tangent vector of positively pairs with the orientation . Since we must have that is a counter-clockwise rotation of to ensure that .  One way to remember this is to say that the orientation of the boundary is always made so that the interior is to the left of the direction of travel.   "
},
{
  "id": "sec-stokes-11",
  "level": "2",
  "url": "sec-stokes.html#sec-stokes-11",
  "type": "Example",
  "number": "5.2.5",
  "title": "Two dimensional subspace with boundary II.",
  "body": " Two dimensional subspace with boundary II   For an oriented surface in we take as the normal vector to the surface inducing the orientation (so that ). Along the boundary there is an outward pointing normal vector field which is tangent to and orthogonal to . If is the oriented unit tangent field along the boundary, then forms the orthonormal basis (also known as a frame) of the tangent space for each . The way to remember this is to imagine moving along the boundary of in such a way that the orientation is up and the surface is to your left.   "
},
{
  "id": "sec-stokes-12",
  "level": "2",
  "url": "sec-stokes.html#sec-stokes-12",
  "type": "Example",
  "number": "5.2.6",
  "title": "Three dimensional subspace with boundary.",
  "body": " Three dimensional subspace with boundary   A last example to understand is that of a region which is the closure of an open set and inherits the standard orientation . In this case, if is the outward pointing unit normal vector to then it must also compatibly orient (i.e. ). This is because, by the definition of the Hodge star operator in equation , we have   "
},
{
  "id": "thm-stokes",
  "level": "2",
  "url": "sec-stokes.html#thm-stokes",
  "type": "Theorem",
  "number": "5.2.7",
  "title": "Stokes’ Theorem.",
  "body": " Stokes' Theorem   Let be a smooth compact oriented -dimensional subspace of and a differentiable -form on . Then    First we will require the existence of a partition of unity subordinate to the cover of . For our purposes, we cover of by a finite number of parameterizations as in equation . Writing and , a partition of unity subordinate to this cover is a set of smooth maps for which there is some where   for all and all ,   for all and all ,  The sum satisfies the equality  The existence of such a partition of unity can be found in any analysis book and is obtained by defining, for each and , a smooth bump function which is nonzero on the complement of the union of all open sets except the given (or ) and zero off of of it. Then adding these functions together and dividing each one by the resulting sum produces a collection and . We leave the details for the references and proceed with the proof.  Now, we may extend each and to smooth functions on all of by taking them to be zero off of and respectively. Doing so, and using property (3) along with linearity of the exterior derivative, gives us an equality of forms Since integration of forms is also linear, we may prove equation for the forms and and the theorem will follow.  The advantage of (and ) over itself, is that when we pull these back along (and ) respectively and write them in coordinates as we have that for with and . Clearly, this then also holds for the exterior derivative Now, consider the cube in . Then since is zero outside for every , we have that the form and its exterior derivative is as well. Thus if we integrate we obtain Now, since every has continuous second derivatives, each of the partials are continuous and so integrable. Thus, letting we may apply Fubini's Theorem and integrate the -th variable first in the -th summand for to obtain This follows from the fact that is zero outside of the ball of radius . Thus, the -th summand is all that remains. Take , and orient it with (where the subscript denotes the dimension) so that . Note that this means that is compatibly oriented as the part of the boundary of . Then, letting we obtain Putting equations and together with equation gives for every . On the other hand, equation holds for every (including ) when is replaced by since (or an extension of it) vanishes on the boundary of . This implies for all . As was mentioned earlier, combining these results with linearity of integration and equation gives the theorem.   "
},
{
  "id": "fig-stokes",
  "level": "2",
  "url": "sec-stokes.html#fig-stokes",
  "type": "Table",
  "number": "5.2.8",
  "title": "Application of Stokes’ Theorem for <span class=\"process-math\">\\(X \\subset \\mathbb{R}^n\\)<\/span>",
  "body": " Application of Stokes' Theorem for    Theorem      Fundamental Theorem of Calculus          Fundamental Theorem of Line Integrals   any    Green's      Classical Stokes'      Divergence      "
},
{
  "id": "cor-closedstokes",
  "level": "2",
  "url": "sec-stokes.html#cor-closedstokes",
  "type": "Corollary",
  "number": "5.2.9",
  "title": "",
  "body": "  Let be a smooth oriented -dimensional closed subspace of and a differential -form. Then    This can be seen by removing a small ball in so that . The boundary of both and are the same space , with opposite orientations. So   "
},
{
  "id": "exe-stokes-1",
  "level": "2",
  "url": "sec-stokes.html#exe-stokes-1",
  "type": "Exercise",
  "number": "5.2.1",
  "title": "",
  "body": " Let be the annulus in given by the inequalities and oriented with . Describe the boundary and its compatible orientation.  "
},
{
  "id": "exe-stokes-2",
  "level": "2",
  "url": "sec-stokes.html#exe-stokes-2",
  "type": "Exercise",
  "number": "5.2.2",
  "title": "",
  "body": " Suppose is the region in described by the inequalities and oriented with . Describe the boundary and its compatible orientation.  "
},
{
  "id": "exe-stokes-3",
  "level": "2",
  "url": "sec-stokes.html#exe-stokes-3",
  "type": "Exercise",
  "number": "5.2.3",
  "title": "",
  "body": " Let be the oriented surface in defined by oriented away from the -axis. Calculate  "
},
{
  "id": "exe-stokes-4",
  "level": "2",
  "url": "sec-stokes.html#exe-stokes-4",
  "type": "Exercise",
  "number": "5.2.4",
  "title": "",
  "body": " For any positive real number let be the -dimensional sphere of radius . Let and show that, for any and    "
},
{
  "id": "sec-ftli",
  "level": "1",
  "url": "sec-ftli.html",
  "type": "Section",
  "number": "5.3",
  "title": "Stokes’ Theorem on curves - The Fundamental Theorem of Line Integrals",
  "body": " Stokes' Theorem on curves - The Fundamental Theorem of Line Integrals  Our first application of Stokes' Theorem is for vector line integrals. First, we define a special type of vector field.     Conservative vector field    A vector field is called conservative if there exists a function on the space, called a potential for , for which    The question of whether a vector field is conservative or not may seem difficult to answer, but there is a basic test that can be made which, in some cases, is enough.   Cross-partials test   If is a conservative vector field on an open subset of Euclidean space then for all .    Exercise.    The converse of this proposition is not always true, as we will see in a moment. However, if we add some conditions on the domain , then the converse does hold.   Conservative vector field I   A vector field like whose coordinate functions are functions only of the given coordinate is always conservative. This is because we may integrate each function individually and add them to produce a potential     Conservative vector field II   On the other hand, it may not be immediately clear that the vector field is conservative. Here, we check to see that . This suggests that there may be a potential (whereas if the equality did not hold, we would know for certain that the field was not conservative). Integrating the first field with respect to works straightaway and produces as a potential.    To prove the main theorem, we require a bit of vocabulary.     Closed and exact forms    A differential -form is called closed if and exact if there is a -form for which .    The definition of gradient is . So another way of saying that a vector field is conservative is to say that it is the dual of an exact -form. Let us now state the main theorem.   Fundamental Theorem of Line Integrals   Suppose is a piecewise linear curve in oriented from to and is a conservative vector field defined on a neighborhood of with potential . Then    Now, we recall that and is an exact form. Also, dualizing twice does nothing, and so using the definition of vector line integral in along with Stokes' we obtain    An immediate corollary occurs here.    If is a conservative vector field and is a closed oriented curve then    This follows from and a similar argument as in the proof. It also gives us a very interesting counter-example to the converse of the cross-partials test.   A non-conservative vector field   Consider the vector field which is defined and infinitely differentiable in away from the origin. We can check that Thus satisfies the cross-partials test. On the other hand, If is the (closed) unit circle, oriented counterclockwise, then we computed in that Thus cannot be conservative even though it satisfies the cross-partials test!    The last example should cause a bit of concern, because often we hope for an easy test to determine whether a given field has a potential. However, there is more to the story here.   Path Independence   Let be a vector field defined on an open set of . Then is conservative if and only if the vector line integral on a smooth connected oriented curve in depends only on its initial and terminal points.    If one assumes is conservative, then the fundamental theorem of line integrals immediately shows it is path independent. On the other hand, if it is path independent, for each connected component of , we choose a point and define the function where is any path from to . Showing is indeed a potential for is left as an exercise.    What is meant here is that if is any other connected curve in with the same initial and terminal points, then This property of is called path independence .  The last proposition should be thought of as a way to characterize conservative vector fields. It certainly is not something that can be verified through trial and error because you would need to calculate a vector line integral for every path between points (of which there are infinitely many). However, we can use this result to a great purpose, but we need a definition first. We call a closed curve a simple closed curve if there is a 1-1 continuous map from the circle to .     Simply connected domain    A domain in is called simply connected if, given any piecewise smooth simple closed curve in , there is a smooth map from the unit disc to whose boundary is .    One should think of lassos or rubber bands when considering whether a region is simply connected. Imagine the domain has a lasso thrown in it and the person wants to tighten the lasso to a point. Can they do it while keeping it in ? If the answer is always yes, then is simply connected, otherwise, it is not. The upshot of this definition is that many domains are in fact simply connected, and when they are, we have the following very helpful result!  Before proving the next proposition, we make a note that the cross-partials condition on is precisely the condition that Or, using our new vocabulary, that the dual is a closed -form.    Suppose is a vector field defined on a simply connected open set of . Then is conservative if and only if it satisfies the cross-partials test.    By and we need only show that if satisfies the cross-partials test then it is path independent. Suppose and are two smooth paths from to in . If they intersect, we may break them up into shorter paths where they do not (or replace one of them over small intervals by a new set of paths). So let us assume they only intersect at the endpoints. Then, reversing the orientation of we may glue these two paths together to obtain a simple oriented closed curve (here the sign in the exponent indicates a change in orientation). Since is simply connected, there is a smooth map which sends the boundary of to . But then, using the fact that is closed since it passes the cross-partials test and Stokes' we obtain Thus and is path independent.    Taking another look at we can identify the culprit behind why is not conservative. Namely, is defined on the punctured plane, which is not simply connected. However, changing the domain of so that it is all points in the plane except the positive -axis would in fact make conservative!   Determine if the following vector fields on are conservative. If they are, find a potential function.   ,    ,    .   Which of the following domains are simply connected.  The set of points in except the unit disc.   The set of points on the sphere in .   The set of points in but not on the or axes.   Give complete responses to the following questions:  Show the gravitational vector field satisfies the cross-partials test.   Is the domain of definition of simply connected? Explain your response.   Find a potential function for if it exists.   Compute the work done by gravity along any path starting at the point and ending at the point .    Prove .    Show that the function in equation is a potential for .    By exhibiting a potential, show that even though the vector field on is not conservative, it is indeed conservative as a vector field on .    "
},
{
  "id": "def-conservative",
  "level": "2",
  "url": "sec-ftli.html#def-conservative",
  "type": "Definition",
  "number": "5.3.1",
  "title": "",
  "body": "   Conservative vector field    A vector field is called conservative if there exists a function on the space, called a potential for , for which   "
},
{
  "id": "prop-crosspartial",
  "level": "2",
  "url": "sec-ftli.html#prop-crosspartial",
  "type": "Proposition",
  "number": "5.3.2",
  "title": "Cross-partials test.",
  "body": " Cross-partials test   If is a conservative vector field on an open subset of Euclidean space then for all .    Exercise.   "
},
{
  "id": "sec-ftli-7",
  "level": "2",
  "url": "sec-ftli.html#sec-ftli-7",
  "type": "Example",
  "number": "5.3.3",
  "title": "Conservative vector field I.",
  "body": " Conservative vector field I   A vector field like whose coordinate functions are functions only of the given coordinate is always conservative. This is because we may integrate each function individually and add them to produce a potential   "
},
{
  "id": "sec-ftli-8",
  "level": "2",
  "url": "sec-ftli.html#sec-ftli-8",
  "type": "Example",
  "number": "5.3.4",
  "title": "Conservative vector field II.",
  "body": " Conservative vector field II   On the other hand, it may not be immediately clear that the vector field is conservative. Here, we check to see that . This suggests that there may be a potential (whereas if the equality did not hold, we would know for certain that the field was not conservative). Integrating the first field with respect to works straightaway and produces as a potential.   "
},
{
  "id": "def-closed-and-exact-forms",
  "level": "2",
  "url": "sec-ftli.html#def-closed-and-exact-forms",
  "type": "Definition",
  "number": "5.3.5",
  "title": "",
  "body": "   Closed and exact forms    A differential -form is called closed if and exact if there is a -form for which .   "
},
{
  "id": "thm-ftli",
  "level": "2",
  "url": "sec-ftli.html#thm-ftli",
  "type": "Theorem",
  "number": "5.3.6",
  "title": "Fundamental Theorem of Line Integrals.",
  "body": " Fundamental Theorem of Line Integrals   Suppose is a piecewise linear curve in oriented from to and is a conservative vector field defined on a neighborhood of with potential . Then    Now, we recall that and is an exact form. Also, dualizing twice does nothing, and so using the definition of vector line integral in along with Stokes' we obtain   "
},
{
  "id": "sec-ftli-14",
  "level": "2",
  "url": "sec-ftli.html#sec-ftli-14",
  "type": "Corollary",
  "number": "5.3.7",
  "title": "",
  "body": "  If is a conservative vector field and is a closed oriented curve then   "
},
{
  "id": "ex-crosspartialfail",
  "level": "2",
  "url": "sec-ftli.html#ex-crosspartialfail",
  "type": "Example",
  "number": "5.3.8",
  "title": "A non-conservative vector field.",
  "body": " A non-conservative vector field   Consider the vector field which is defined and infinitely differentiable in away from the origin. We can check that Thus satisfies the cross-partials test. On the other hand, If is the (closed) unit circle, oriented counterclockwise, then we computed in that Thus cannot be conservative even though it satisfies the cross-partials test!   "
},
{
  "id": "prop-pathindependence",
  "level": "2",
  "url": "sec-ftli.html#prop-pathindependence",
  "type": "Proposition",
  "number": "5.3.9",
  "title": "Path Independence.",
  "body": " Path Independence   Let be a vector field defined on an open set of . Then is conservative if and only if the vector line integral on a smooth connected oriented curve in depends only on its initial and terminal points.    If one assumes is conservative, then the fundamental theorem of line integrals immediately shows it is path independent. On the other hand, if it is path independent, for each connected component of , we choose a point and define the function where is any path from to . Showing is indeed a potential for is left as an exercise.   "
},
{
  "id": "sec-ftli-19",
  "level": "2",
  "url": "sec-ftli.html#sec-ftli-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "path independence "
},
{
  "id": "sec-ftli-20",
  "level": "2",
  "url": "sec-ftli.html#sec-ftli-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simple "
},
{
  "id": "def-simply-connected",
  "level": "2",
  "url": "sec-ftli.html#def-simply-connected",
  "type": "Definition",
  "number": "5.3.10",
  "title": "",
  "body": "   Simply connected domain    A domain in is called simply connected if, given any piecewise smooth simple closed curve in , there is a smooth map from the unit disc to whose boundary is .   "
},
{
  "id": "prop-potentialexistence",
  "level": "2",
  "url": "sec-ftli.html#prop-potentialexistence",
  "type": "Proposition",
  "number": "5.3.11",
  "title": "",
  "body": "  Suppose is a vector field defined on a simply connected open set of . Then is conservative if and only if it satisfies the cross-partials test.    By and we need only show that if satisfies the cross-partials test then it is path independent. Suppose and are two smooth paths from to in . If they intersect, we may break them up into shorter paths where they do not (or replace one of them over small intervals by a new set of paths). So let us assume they only intersect at the endpoints. Then, reversing the orientation of we may glue these two paths together to obtain a simple oriented closed curve (here the sign in the exponent indicates a change in orientation). Since is simply connected, there is a smooth map which sends the boundary of to . But then, using the fact that is closed since it passes the cross-partials test and Stokes' we obtain Thus and is path independent.   "
},
{
  "id": "exe-ftli-1",
  "level": "2",
  "url": "sec-ftli.html#exe-ftli-1",
  "type": "Exercise",
  "number": "5.3.1",
  "title": "",
  "body": "Determine if the following vector fields on are conservative. If they are, find a potential function.   ,    ,    .  "
},
{
  "id": "exe-ftli-2",
  "level": "2",
  "url": "sec-ftli.html#exe-ftli-2",
  "type": "Exercise",
  "number": "5.3.2",
  "title": "",
  "body": "Which of the following domains are simply connected.  The set of points in except the unit disc.   The set of points on the sphere in .   The set of points in but not on the or axes.  "
},
{
  "id": "exe-ftli-3",
  "level": "2",
  "url": "sec-ftli.html#exe-ftli-3",
  "type": "Exercise",
  "number": "5.3.3",
  "title": "",
  "body": "Give complete responses to the following questions:  Show the gravitational vector field satisfies the cross-partials test.   Is the domain of definition of simply connected? Explain your response.   Find a potential function for if it exists.   Compute the work done by gravity along any path starting at the point and ending at the point .  "
},
{
  "id": "exe-ftli-4",
  "level": "2",
  "url": "sec-ftli.html#exe-ftli-4",
  "type": "Exercise",
  "number": "5.3.4",
  "title": "",
  "body": " Prove .  "
},
{
  "id": "exe-ftli-5",
  "level": "2",
  "url": "sec-ftli.html#exe-ftli-5",
  "type": "Exercise",
  "number": "5.3.5",
  "title": "",
  "body": " Show that the function in equation is a potential for .  "
},
{
  "id": "exe-ftli-6",
  "level": "2",
  "url": "sec-ftli.html#exe-ftli-6",
  "type": "Exercise",
  "number": "5.3.6",
  "title": "",
  "body": " By exhibiting a potential, show that even though the vector field on is not conservative, it is indeed conservative as a vector field on .  "
},
{
  "id": "sec-greens",
  "level": "1",
  "url": "sec-greens.html",
  "type": "Section",
  "number": "5.4",
  "title": "Stokes’ Theorem in dimension <span class=\"process-math\">\\(2\\)<\/span> - Green’s Theorems",
  "body": " Stokes' Theorem in dimension - Green's Theorems  The next application of Stokes' Theorem involves -dimensional regions in .Before stating this, we recall that if is a vector field defined on a region in then the -dimensional curl of is given by Let us give the quick proof of the theorem.   Green's Theorem - Circulation Form   Let be a compact domain with boundary in oriented with the standard orientation and a differentiable vector field on . Then    Using Stokes' , and the definition of vector line integrals, we obtain    Let us show how helpful this theorem can be.   Applying Green's Circulation Theorem   Suppose is a circle of radius centered at oriented counter-clockwise and consider the vector field If we want to find the vector line integral by a direct computation, we may find ourselves confronted with an extremely complicated formula. However, if we realize that is the boundary of the disc of radius , we may apply Green's Theorem and see    One should think of Green's Theorem as asserting that the integral of all infinitesimal rotations of a field within a domain equals the total circulation of said field. As the student will recall, there is more than one way to integrate a vector field over a curve in which brings us to the other form of Green's Theorem.   Green's Theorem - Flux Form   Let be a compact domain with boundary in oriented with the standard orientation and a differentiable vector field on . Then    This follows from the of the flux vector integral, , and Stokes' . We observe    Let's take a look at an example using this theorem.   Applying Green's Flux Theorem   Let and Suppose you are asked to calculate the flux of across the boundary . Noting that is a square, this would involve four ugly flux vector line integrals. However, recognizing that and that is a square with side length , we can apply Green's Theorem to obtain    Now, just as some vector fields satisfy the cross-partials test, other vector fields have divergence zero.     Solenoidal vector field    A vector field on an open set in is called solenoidal (also incompressible or divergence-free ) if .    In fact, of the three terms above, incompressible does the best job at describing such a field. This is because one can imagine as the velocity field of an incompressible fluid. And then Green's Theorem is saying that the amount of fluid entering a region (per unit time) must equal the amount leaving a region (the difference being the flux over the boundary of the region).  Just as satisfying the cross-partials test for can be viewed as , or saying is closed, we can also view being solenoidal as satisfying the equation so that is closed.  An insightful student may wonder whether we can find potentials for solenoidal fields as we did for fields satisfying the cross-partials test (on simply connected domains). However, that student will quickly run into a basic question : if is defined on an -dimensional domain then is an -form and so a potential would have to be an -form. So if we wanted the potential to be a scalar function we would need ! Indeed, then is a -form and a potential would again just be a function (we will discuss non-scalar potentials next section).     Stream function    Suppose is a solenoidal vector field on . A stream function  for is a scalar function for which     Alternatively, the stream function satisfies the equation As we will see in the next example, stream functions do a good job of describing the integral curves of the flow of a two dimensional vector field. These curves are both the images of solutions to the differential equation of the vector field and level curves of the stream function.  As a side remark, stream functions do have a more general incarnation in higher (even) dimensions as Hamiltonians. The point is that a solenoidal vector field in is precisely one whose flow (i.e. whose solution to the ODE ) preserves area. Such fields with a potential in general are called Hamiltonian fields and are intensively studied in modern mathematics and physics. One reason for this is that these types of fields describe the evolution of a system of particles in classical mechanics.   Computing a stream function   The rotational vector field is called so because its time flow is just counter-clockwise rotation of radians. Indeed, we know that such a rotation is given by the transformation So we can check that The map is called the time flow of . One can easily check that so that is solenoidal. Note, however, that it does not pass the cross-partials test, so it is not conservative. One can check to see that is a stream function for . We note that this function has the property that any flow line of (i.e. a solution to the ODE ) is a level curve of . In other words, the field is tangent to the level curves of . In fact, this is a general feature of stream functions.    We can use our knowledge of conservative vector fields to give a criterion on when stream functions exist.    If is a solenoidal vector field defined on a simply connected open set in then there exists a stream function for .    Suppose and let . Since is solenoidal, we have so that But this implies satisfies the cross-partials test on the simply connected domain . gives that is conservative so there is a potential function such that Thus so that is a stream function for .     Consider the region of points bounded by an ellipse which is oriented compatibly. Take the vector field  Without parametrizing the ellipse , compute the vector line integral State any theorems that you use to obtain your result.   Without parametrizing the ellipse , compute the flux line integral State any theorems that you use to obtain your result.   For a point in , let denote the closed disc of radius centered at and the open disc. Consider the region in the plane (this is the set of points in the large disc with the two smaller discs removed). The boundary of consists of three circles, the boundary of the radius disc and the boundaries of the radius discs centered at and respectively. Orient these circles counter-clockwise.  If satisfies the cross-partials test on and then find    If on and then find    Suppose is a simply connected open set in and is a smooth vector field that is both solenoidal and conservative. Let be a potential for and a stream function for .  Show that and satisfy the Cauchy-Riemann equations    Show that both functions and are harmonic which means they satisfy Laplace's equation    Consider the field  Show that is both solenoidal and conservative.   Find a potential function and a stream function for .   Writing the complex number as , identify the function from to .     Give an example of an open set of and a solenoidal vector field defined on that does not have a stream function. Explain your response.    "
},
{
  "id": "cor-greens-circulation",
  "level": "2",
  "url": "sec-greens.html#cor-greens-circulation",
  "type": "Theorem",
  "number": "5.4.1",
  "title": "Green’s Theorem - Circulation Form.",
  "body": " Green's Theorem - Circulation Form   Let be a compact domain with boundary in oriented with the standard orientation and a differentiable vector field on . Then    Using Stokes' , and the definition of vector line integrals, we obtain   "
},
{
  "id": "sec-greens-5",
  "level": "2",
  "url": "sec-greens.html#sec-greens-5",
  "type": "Example",
  "number": "5.4.2",
  "title": "Applying Green’s Circulation Theorem.",
  "body": " Applying Green's Circulation Theorem   Suppose is a circle of radius centered at oriented counter-clockwise and consider the vector field If we want to find the vector line integral by a direct computation, we may find ourselves confronted with an extremely complicated formula. However, if we realize that is the boundary of the disc of radius , we may apply Green's Theorem and see   "
},
{
  "id": "cor-greens-flux",
  "level": "2",
  "url": "sec-greens.html#cor-greens-flux",
  "type": "Theorem",
  "number": "5.4.3",
  "title": "Green’s Theorem - Flux Form.",
  "body": " Green's Theorem - Flux Form   Let be a compact domain with boundary in oriented with the standard orientation and a differentiable vector field on . Then    This follows from the of the flux vector integral, , and Stokes' . We observe   "
},
{
  "id": "sec-greens-9",
  "level": "2",
  "url": "sec-greens.html#sec-greens-9",
  "type": "Example",
  "number": "5.4.4",
  "title": "Applying Green’s Flux Theorem.",
  "body": " Applying Green's Flux Theorem   Let and Suppose you are asked to calculate the flux of across the boundary . Noting that is a square, this would involve four ugly flux vector line integrals. However, recognizing that and that is a square with side length , we can apply Green's Theorem to obtain   "
},
{
  "id": "def-solenoidal",
  "level": "2",
  "url": "sec-greens.html#def-solenoidal",
  "type": "Definition",
  "number": "5.4.5",
  "title": "",
  "body": "   Solenoidal vector field    A vector field on an open set in is called solenoidal (also incompressible or divergence-free ) if .   "
},
{
  "id": "def-stream",
  "level": "2",
  "url": "sec-greens.html#def-stream",
  "type": "Definition",
  "number": "5.4.6",
  "title": "",
  "body": "   Stream function    Suppose is a solenoidal vector field on . A stream function  for is a scalar function for which    "
},
{
  "id": "sec-greens-18",
  "level": "2",
  "url": "sec-greens.html#sec-greens-18",
  "type": "Example",
  "number": "5.4.7",
  "title": "Computing a stream function.",
  "body": " Computing a stream function   The rotational vector field is called so because its time flow is just counter-clockwise rotation of radians. Indeed, we know that such a rotation is given by the transformation So we can check that The map is called the time flow of . One can easily check that so that is solenoidal. Note, however, that it does not pass the cross-partials test, so it is not conservative. One can check to see that is a stream function for . We note that this function has the property that any flow line of (i.e. a solution to the ODE ) is a level curve of . In other words, the field is tangent to the level curves of . In fact, this is a general feature of stream functions.   "
},
{
  "id": "prop-stream-exist",
  "level": "2",
  "url": "sec-greens.html#prop-stream-exist",
  "type": "Proposition",
  "number": "5.4.8",
  "title": "",
  "body": "  If is a solenoidal vector field defined on a simply connected open set in then there exists a stream function for .    Suppose and let . Since is solenoidal, we have so that But this implies satisfies the cross-partials test on the simply connected domain . gives that is conservative so there is a potential function such that Thus so that is a stream function for .   "
},
{
  "id": "exe-greens-1",
  "level": "2",
  "url": "sec-greens.html#exe-greens-1",
  "type": "Exercise",
  "number": "5.4.1",
  "title": "",
  "body": "Consider the region of points bounded by an ellipse which is oriented compatibly. Take the vector field  Without parametrizing the ellipse , compute the vector line integral State any theorems that you use to obtain your result.   Without parametrizing the ellipse , compute the flux line integral State any theorems that you use to obtain your result.  "
},
{
  "id": "exe-greens-2",
  "level": "2",
  "url": "sec-greens.html#exe-greens-2",
  "type": "Exercise",
  "number": "5.4.2",
  "title": "",
  "body": "For a point in , let denote the closed disc of radius centered at and the open disc. Consider the region in the plane (this is the set of points in the large disc with the two smaller discs removed). The boundary of consists of three circles, the boundary of the radius disc and the boundaries of the radius discs centered at and respectively. Orient these circles counter-clockwise.  If satisfies the cross-partials test on and then find    If on and then find   "
},
{
  "id": "exercise-holomorphic",
  "level": "2",
  "url": "sec-greens.html#exercise-holomorphic",
  "type": "Exercise",
  "number": "5.4.3",
  "title": "",
  "body": "Suppose is a simply connected open set in and is a smooth vector field that is both solenoidal and conservative. Let be a potential for and a stream function for .  Show that and satisfy the Cauchy-Riemann equations    Show that both functions and are harmonic which means they satisfy Laplace's equation   "
},
{
  "id": "exe-greens-4",
  "level": "2",
  "url": "sec-greens.html#exe-greens-4",
  "type": "Exercise",
  "number": "5.4.4",
  "title": "",
  "body": "Consider the field  Show that is both solenoidal and conservative.   Find a potential function and a stream function for .   Writing the complex number as , identify the function from to .   "
},
{
  "id": "exe-greens-5",
  "level": "2",
  "url": "sec-greens.html#exe-greens-5",
  "type": "Exercise",
  "number": "5.4.5",
  "title": "",
  "body": " Give an example of an open set of and a solenoidal vector field defined on that does not have a stream function. Explain your response.  "
},
{
  "id": "sec-classicalstokes",
  "level": "1",
  "url": "sec-classicalstokes.html",
  "type": "Section",
  "number": "5.5",
  "title": "Stokes’ Theorem in dimension <span class=\"process-math\">\\(3\\)<\/span> - Classical Stokes’ and Divergence Theorems",
  "body": " Stokes' Theorem in dimension - Classical Stokes' and Divergence Theorems  While Green's Theorems concern two dimensional regions in the plane, applying Stokes' Theorem to smooth subspaces of yields three possible cases, depending on the dimension of . The case of is taken care of for all by the Fundamental Theorem of Line Integrals. However, when we have the Classical Stokes' Theorem and when we obtain the Divergence Theorem (also known as Gauss' Theorem). Of course, as is the case in , these are all just shadows of Stokes' Theorem, but as they appear slightly different, we will state, prove and work through a few applications in each case.   Classical Stokes' Theorem   Let be a smooth compact oriented surface with boundary in and a vector field on . Then    Recall that, in three dimensions, applying the Hodge star twice gives the identity. Using this along with , Stokes' and the definition of vector integrals (both flux and line) to obtain    The idea here again is that the curl of records its infinitesimal rotations and integrating it over a surface will yield the total circulation of along its boundary.   Applying the Classical Stokes' Theorem   Let and suppose is an oriented surface with compatibly oriented boundary , the unit circle in the plane oriented counter-clockwise. Suppose we wish to compute the vector surface integral Certainly, before the Classical Stokes' Theorem, we would have no hope at all since the surface is not even specified, just its boundary. But with the theorem, we can check to see that there is another vector field which satisfies Thus, we may apply our theorem (for ) to see that We have all of the tools necessary now to make the computation. Taking the parameterization for with tangent vector we obtain the result    In this example, there was a step which certainly may have seemed mysterious. Namely, at some point we produced a vector field whose curl was the field that we were trying to integrate. In principle, this type of step has been made many times by calculus students when they find anti-derivatives to compute definite integrals. Of course, finding the `anti-curl' may be a bit daunting (just like finding a vector potential or stream function may be daunting), but luckily there are some results that tell us when we should try. First we make an official definition for this anti-derivative.     Vector potential    Let be an open subset of and a vector field defined on . We say that is a vector potential for if    Now, a student should not get the wrong idea. Just as scalar potentials for vector fields do not always exist, vector potentials do not always exist either. But as in the case of scalar potentials, there is a quick test which, if it fails, tells us a vector potential does not exist.    If has a vector potential then it is solenoidal.    Exercise.    Recall is solenoidal if . So before trying to come up with a vector potential, one should quickly check this condition.   Computing a vector potential   If you were asked by someone to find a vector potential for and you started writing the curl of and taking anti-derivatives, you would end up quite frustrated. The first step here is to observe that so that no such potential exists, after which you should suspect the questioner of incompetence or cruelty. On the other hand, had they slightly changed their field to you could easily check to see that and there is hope. Again, taking , to verify you would need to solve the partial differential equations To solve this, simplify the system by assuming and solve the first equation with . Then the remaining equations are for which one easily sees is a solution. Thus is a vector potential for .    It may have bothered a student to make the assumption in this example. After all, how do we know we're not assuming too much here and making the system impossible to solve? The reason that one does not need to worry here is that, unlike scalar potentials, there are many vector potentials (when they exist) for a given field. Indeed, if is a vector potential for , then so is for any smooth function . So making the restriction can be seen as subtracting off the gradient of some function.  Having a vector potential ensures very special properties whose proofs are analogous to those for scalar potentials and conservative fields.    If has a vector potential, then the vector surface integral of over a compact oriented surface with boundary depends only on as a field on the boundary .       This proposition can be thought of as saying that is `surface independent' just like conservative vector fields are path independent.    If has a vector potential and is a closed oriented surface, then    This proposition however shows us that our solenoidal test may not always be enough.   Solenoidal vector field with no vector potential   Consider the gravitational vector field, but rescaled to remove the sign, masses and gravitational constant Taking divergence gives Thus is solenoidal. However, in you will have made a computation showing, for the unit sphere with outward normal, Of course, is not zero so, even though is solenoidal, it is does not have a vector potential.    A student who has been paying some attention may immediately conjecture that perhaps our solenoidal test will guarantee the existence of a vector potential if the domain of the vector field is simply connected. However, such a student would only have been paying \\textit{some} attention ... because looking at the last example, we see that is defined on a simply connected region! In fact, there is a condition that one can make on the domain of that will in fact work. We state it here, but will not prove it.    Suppose is an open subset of for which, given any closed surface in , there is a compact region in for which . Then the following are equivalent:   is solenoidal,   is surface independent,   has a vector potential.     We return to applications of Stokes' Theorem in and state our final corollary.   Divergence Theorem   Let be a compact three dimensional subspace of with smooth compatibly oriented boundary and a differentiable vector field on . Then    Here, we need only use , Stokes' and the definition of vector surface integrals to obtain    Let us see an example applying this theorem.   Applying the Divergence Theorem   Let be the sphere of radius centered at the origin and oriented with outward normal, and suppose we wanted to compute the vector surface integral Parameterizing the sphere and computing would end in tragedy, or at least frustration. However, calculating and applying the Divergence Theorem to the ball of radius centered at the origin gives      Prove .   For the following vector fields, decide whether there is a vector potential or not. If there is, give an example of one.   .    .    Let be an oriented surface with compatibly oriented boundary given by oriented counter-clockwise when projected to the -plane. Determine which, if any, of the vector fields in the last problem for which you can compute the vector surface integral over .    Let be an ellipsoid in which encloses the origin and is oriented with outward normal and Using the result from and the Divergence Theorem, evaluate the surface integral     Let and be the spheres of radii and centered at and take to be the point . Either give an example of a differentiable solenoidal vector field defined off of and for which or explain why such a field does not exist.    "
},
{
  "id": "thm-classical-stokes",
  "level": "2",
  "url": "sec-classicalstokes.html#thm-classical-stokes",
  "type": "Theorem",
  "number": "5.5.1",
  "title": "Classical Stokes’ Theorem.",
  "body": " Classical Stokes' Theorem   Let be a smooth compact oriented surface with boundary in and a vector field on . Then    Recall that, in three dimensions, applying the Hodge star twice gives the identity. Using this along with , Stokes' and the definition of vector integrals (both flux and line) to obtain   "
},
{
  "id": "sec-classicalstokes-5",
  "level": "2",
  "url": "sec-classicalstokes.html#sec-classicalstokes-5",
  "type": "Example",
  "number": "5.5.2",
  "title": "Applying the Classical Stokes’ Theorem.",
  "body": " Applying the Classical Stokes' Theorem   Let and suppose is an oriented surface with compatibly oriented boundary , the unit circle in the plane oriented counter-clockwise. Suppose we wish to compute the vector surface integral Certainly, before the Classical Stokes' Theorem, we would have no hope at all since the surface is not even specified, just its boundary. But with the theorem, we can check to see that there is another vector field which satisfies Thus, we may apply our theorem (for ) to see that We have all of the tools necessary now to make the computation. Taking the parameterization for with tangent vector we obtain the result   "
},
{
  "id": "def-vector-potential",
  "level": "2",
  "url": "sec-classicalstokes.html#def-vector-potential",
  "type": "Definition",
  "number": "5.5.3",
  "title": "",
  "body": "   Vector potential    Let be an open subset of and a vector field defined on . We say that is a vector potential for if   "
},
{
  "id": "prop-solenoidaltest",
  "level": "2",
  "url": "sec-classicalstokes.html#prop-solenoidaltest",
  "type": "Proposition",
  "number": "5.5.4",
  "title": "",
  "body": "  If has a vector potential then it is solenoidal.    Exercise.   "
},
{
  "id": "sec-classicalstokes-11",
  "level": "2",
  "url": "sec-classicalstokes.html#sec-classicalstokes-11",
  "type": "Example",
  "number": "5.5.5",
  "title": "Computing a vector potential.",
  "body": " Computing a vector potential   If you were asked by someone to find a vector potential for and you started writing the curl of and taking anti-derivatives, you would end up quite frustrated. The first step here is to observe that so that no such potential exists, after which you should suspect the questioner of incompetence or cruelty. On the other hand, had they slightly changed their field to you could easily check to see that and there is hope. Again, taking , to verify you would need to solve the partial differential equations To solve this, simplify the system by assuming and solve the first equation with . Then the remaining equations are for which one easily sees is a solution. Thus is a vector potential for .   "
},
{
  "id": "sec-classicalstokes-14",
  "level": "2",
  "url": "sec-classicalstokes.html#sec-classicalstokes-14",
  "type": "Proposition",
  "number": "5.5.6",
  "title": "",
  "body": "  If has a vector potential, then the vector surface integral of over a compact oriented surface with boundary depends only on as a field on the boundary .      "
},
{
  "id": "prop-surfaceindependent",
  "level": "2",
  "url": "sec-classicalstokes.html#prop-surfaceindependent",
  "type": "Proposition",
  "number": "5.5.7",
  "title": "",
  "body": "  If has a vector potential and is a closed oriented surface, then   "
},
{
  "id": "ex-pointmass",
  "level": "2",
  "url": "sec-classicalstokes.html#ex-pointmass",
  "type": "Example",
  "number": "5.5.8",
  "title": "Solenoidal vector field with no vector potential.",
  "body": " Solenoidal vector field with no vector potential   Consider the gravitational vector field, but rescaled to remove the sign, masses and gravitational constant Taking divergence gives Thus is solenoidal. However, in you will have made a computation showing, for the unit sphere with outward normal, Of course, is not zero so, even though is solenoidal, it is does not have a vector potential.   "
},
{
  "id": "prop-vectorpotential",
  "level": "2",
  "url": "sec-classicalstokes.html#prop-vectorpotential",
  "type": "Proposition",
  "number": "5.5.9",
  "title": "",
  "body": "  Suppose is an open subset of for which, given any closed surface in , there is a compact region in for which . Then the following are equivalent:   is solenoidal,   is surface independent,   has a vector potential.    "
},
{
  "id": "thm-divergence",
  "level": "2",
  "url": "sec-classicalstokes.html#thm-divergence",
  "type": "Theorem",
  "number": "5.5.10",
  "title": "Divergence Theorem.",
  "body": " Divergence Theorem   Let be a compact three dimensional subspace of with smooth compatibly oriented boundary and a differentiable vector field on . Then    Here, we need only use , Stokes' and the definition of vector surface integrals to obtain   "
},
{
  "id": "sec-classicalstokes-24",
  "level": "2",
  "url": "sec-classicalstokes.html#sec-classicalstokes-24",
  "type": "Example",
  "number": "5.5.11",
  "title": "Applying the Divergence Theorem.",
  "body": " Applying the Divergence Theorem   Let be the sphere of radius centered at the origin and oriented with outward normal, and suppose we wanted to compute the vector surface integral Parameterizing the sphere and computing would end in tragedy, or at least frustration. However, calculating and applying the Divergence Theorem to the ball of radius centered at the origin gives   "
},
{
  "id": "exe-classicalstokes-1",
  "level": "2",
  "url": "sec-classicalstokes.html#exe-classicalstokes-1",
  "type": "Exercise",
  "number": "5.5.1",
  "title": "",
  "body": " Prove .  "
},
{
  "id": "exe-classicalstokes-2",
  "level": "2",
  "url": "sec-classicalstokes.html#exe-classicalstokes-2",
  "type": "Exercise",
  "number": "5.5.2",
  "title": "",
  "body": "For the following vector fields, decide whether there is a vector potential or not. If there is, give an example of one.   .    .  "
},
{
  "id": "exe-classicalstokes-3",
  "level": "2",
  "url": "sec-classicalstokes.html#exe-classicalstokes-3",
  "type": "Exercise",
  "number": "5.5.3",
  "title": "",
  "body": " Let be an oriented surface with compatibly oriented boundary given by oriented counter-clockwise when projected to the -plane. Determine which, if any, of the vector fields in the last problem for which you can compute the vector surface integral over .  "
},
{
  "id": "exe-classicalstokes-4",
  "level": "2",
  "url": "sec-classicalstokes.html#exe-classicalstokes-4",
  "type": "Exercise",
  "number": "5.5.4",
  "title": "",
  "body": " Let be an ellipsoid in which encloses the origin and is oriented with outward normal and Using the result from and the Divergence Theorem, evaluate the surface integral   "
},
{
  "id": "exe-classicalstokes-5",
  "level": "2",
  "url": "sec-classicalstokes.html#exe-classicalstokes-5",
  "type": "Exercise",
  "number": "5.5.5",
  "title": "",
  "body": " Let and be the spheres of radii and centered at and take to be the point . Either give an example of a differentiable solenoidal vector field defined off of and for which or explain why such a field does not exist.  "
},
{
  "id": "sec-applications",
  "level": "1",
  "url": "sec-applications.html",
  "type": "Section",
  "number": "5.6",
  "title": "Selected Applications",
  "body": " Selected Applications   There are already so many applications of the material covered so far in these notes that it would take a library (or a medium sized cloud account) to cover them all. Instead, I have chosen a few which I believe every aspiring mathematician should encounter.    Maxwell's equations  Maxwell's equations unified two previously distinct forces of nature, electricity and magnetism. Let's describe the players involved in the classical set of equations. The constant denotes the speed of light and   is the electric force field,   is the magnetic force field,   is the scalar charge density,   is a current density field.  One can consider as a weighted velocity field and indeed it is defined as the product of the velocity field of the particles and the charge density . Then the Maxwell's (differential) equations in Gaussian units are  Differential Maxwell's Equations    Equation  Name                      One major application is the following.   Generating electric current   A magnet moving through an enclosed circular wire in three dimensional space will induce a changing magnetic field. Indeed, we can see that moving a magnet from below and through will result in a time varying positive flux (depending on the direction). Letting be the disc with boundary and using the Maxwell-Faraday equation and the classical Stokes' Theorem we see This means that the act of moving a magnet through the interior wire will create a current along the wire. This fact is what many generators of electricity are based on.    Now, let us make a very intriguing and strange sounding assumption: If you have ever played with a pair of magnets, you will notice that, when held up to each other, they either connect and hold together or repel and re-orient themselves. That's because magnets seem to always come as a dipole. The mathematical way of saying this is that the total flux of the magnetic field through any oriented surface is zero (i.e. there is just as much of the magnetic field coming in as going out). Alternatively, we may say that is surface independent as in . We saw in that this property is equivalent to the existence of a vector potential called the magnetic potential where In fact, there is nothing in Maxwell's equations that assures us of this, but no human has ever confirmed anything to contradict it!  Note that with such a magnetic potential, we have that So we have that or that satisfies the cross-partials test. Thus, assuming the region that the field is defined on is simply connected, we have that this vector field is conservative and there is a potential satisfying This scalar potential is called the electric potential .  In fact, while classical mechanics places the emphasis on force fields and views it as the sole determining factor of the physics of a particle, quantum mechanics shows that the magnetic potential and electric potential will effect a particle even when (see the Aharonov-Bohm effect). These effects have been confirmed by experiments. Such real world phenomena gives more reasons to obtain a deeper understanding of differential forms and higher dimensional integrals!  Perhaps unsurprisingly, we may repackage the entire subject in a far more efficient way using differential forms.     Faraday tensor    The Faraday tensor is the differential -form The -current density is the differential -form and the four potential is    Then, as an exercise, the student can verify the following updated statement.    Maxwell's equations are equivalent to  Furthermore, the four potential shows that is an exact two form with    Equation in Maxwell's equations must be performed with the correct Hodge star. Indeed, recall that the Hodge star depends on a (possibly varying) metric on the background space. In space-time, this metric is the Lorentz metric and, in fact, not quite a metric in our sense since it is not positive definite. However, one can still do everything in the same way with the Hodge star using this metric and the equation follows formally.  We note that the vacuum case of these equations is when . In such a case, Maxwell's equations are the same as saying that is a harmonic -form. This involves generalizing the Laplace-Beltrami operator to one on differential forms and then Maxwell's four equations can be written as exactly one equation    Contour integrals  Let us now abandon the four dimensional universe and return to the comfort of two dimensions. Recall that in that there were some very special properties of vector fields that were both solenoidal and conservative on a domain . Let us take such a vector field and convert it into a complex function so that for we write and define     Holomorphic function    The function is called holomorphic at if it arises from where is solenoidal and satisfies the cross-partials test.    Notice that we have not really done anything here, just rewritten the vector field as a complex valued function. Now we think of as a subset of and consider a path in paramaterized by and defined as The interesting new feature of working in the complex numbers is that we now have the operation of multiplication. So we can make sense of the following notion.     Contour integral    The contour integral of over is the complex valued integral    Note that the integral on the right is the basic one variable vector valued integral of the function from to and does not involve anything fancy. However, let us unpack this integral by multiplying everything out to see Somehow, just by writing our vector field as a complex valued function and using complex multiplication, we were able to simultaneously express the vector and vector flux integrals of a given field as the real and imaginary parts of a single integral!  This is all well and good, but we actually have not used the assumption that was solenoidal and passed the cross-partials test. When this happens, we have the following very nice corollary of our Green's Theorems.    The contour integral of a holomorphic function depends only on the path up to deformation so long as the endpoints are fixed. If is a closed curve and bounds a region where is holomorphic, then its contour integral is zero.    What the first statement means is that two different paths which bound the image of a disc must have the same contour integral. Let us look at an example and then apply this important fact.   Computing a residue   Let be a complex number and consider the function Consider a loop around given by for . Then from our work on differential equations, we have so that Note that this result includes both positive and negative integer values of .    To make an even more interesting (and useful) example, we must adopt a few results from complex analysis. Most importantly, the existence of a Taylor's Theorem. To state it, we note that the complex derivative of a function is given by This definition agrees with our expectations of the derivative in that , , and so forth.   Holomorphic functions are analytic   Suppose is holomorphic in a disc around . Then there is a positive constant for which, if ,    By far the most surprising part of this last statement is that , called the radius of convergence, is strictly positive (which is not always true for smooth real functions). The convergence of this series relies on the usual notion of limit in . We use this in the next example.   Contour integral of rational functions   Here let's consider the example where is a complex rational function Here and are polynomials in the complex variable . Now, we refer to where it is shown that is holomorphic. If you look back in your notes to the first section, you'll see the Fundamental Theorem of Algebra which states that a non-constant polynomial always has a root. In particular, if is a root of , we can divide by a large enough power to see where is a polynomial and . But then and is holomorphic at . This means there is a Taylor series for at so that Thus, if is a small loop around we can use linearity and our previous example to compute the contour integral    Now let us apply these computational results to make some brand new computation.   Applying contour integrals   Suppose we want to compute the integral Note that in this case, the denominator can be factored in the complex numbers as Now take and consider the going from to along the -axis and then along the semi-circle paramaterized by for . The contour integral of along breaks up as Examining the second contour integral for large gives In other words, as tends to infinity, the contour integral tends to zero. However, the region between and for large is one on which is always holomorphic. This means their contour integrals are equal by . Furthermore, the same applies if, instead of taking , we took to be a small loop around . Thus, So all we need is to apply equation to our function . For this, we have so that and . Then and Applying equation gives    This last computation should leave you somewhat shocked. If you take a look at your notes from a second semester of calculus, you will most likely see that actually integrating this type of rational function is not included in the section on partial fractions, even if it is one of the forms you might expect. That is because, in most of the examples, one reduces to cases where the denominator is a quadratic polynomial or a power of a linear polynomial, but in my experience, never the power of a quadratic! Nevertheless, the above technique will give you concrete numbers for such indefinite integrals (and many many more) with ease. If you enjoyed this, or are interested in exploring this subject further, take a course on complex analysis where an abundance of mathematical beauty awaits.     Verify equations and in .   Show the following results  Verify that a constant vector field is solenoidal and satisfies the cross-partials test.   Verify that is solenoidal and satisfies the cross-partials test.   If and are both solenoidal and satisfy the cross partial tests, then so does .   If is solenoidal and satisfy the cross partial tests, then so does     Use to show that every complex rational function is holomorphic.    Use a contour integral to calculate    "
},
{
  "id": "subsec-maxwells-equations-2-5",
  "level": "2",
  "url": "sec-applications.html#subsec-maxwells-equations-2-5",
  "type": "Table",
  "number": "5.6.1",
  "title": "Differential Maxwell’s Equations",
  "body": " Differential Maxwell's Equations    Equation  Name                      "
},
{
  "id": "subsec-maxwells-equations-3",
  "level": "2",
  "url": "sec-applications.html#subsec-maxwells-equations-3",
  "type": "Example",
  "number": "5.6.2",
  "title": "Generating electric current.",
  "body": " Generating electric current   A magnet moving through an enclosed circular wire in three dimensional space will induce a changing magnetic field. Indeed, we can see that moving a magnet from below and through will result in a time varying positive flux (depending on the direction). Letting be the disc with boundary and using the Maxwell-Faraday equation and the classical Stokes' Theorem we see This means that the act of moving a magnet through the interior wire will create a current along the wire. This fact is what many generators of electricity are based on.   "
},
{
  "id": "subsec-maxwells-equations-4",
  "level": "2",
  "url": "sec-applications.html#subsec-maxwells-equations-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "magnetic monopoles magnetic potential "
},
{
  "id": "subsec-maxwells-equations-5",
  "level": "2",
  "url": "sec-applications.html#subsec-maxwells-equations-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "electric potential "
},
{
  "id": "def-faraday",
  "level": "2",
  "url": "sec-applications.html#def-faraday",
  "type": "Definition",
  "number": "5.6.3",
  "title": "",
  "body": "   Faraday tensor    The Faraday tensor is the differential -form The -current density is the differential -form and the four potential is   "
},
{
  "id": "prop-maxdiff",
  "level": "2",
  "url": "sec-applications.html#prop-maxdiff",
  "type": "Proposition",
  "number": "5.6.4",
  "title": "",
  "body": "  Maxwell's equations are equivalent to  Furthermore, the four potential shows that is an exact two form with   "
},
{
  "id": "def-holomorphic",
  "level": "2",
  "url": "sec-applications.html#def-holomorphic",
  "type": "Definition",
  "number": "5.6.5",
  "title": "",
  "body": "   Holomorphic function    The function is called holomorphic at if it arises from where is solenoidal and satisfies the cross-partials test.   "
},
{
  "id": "def-contour-integral",
  "level": "2",
  "url": "sec-applications.html#def-contour-integral",
  "type": "Definition",
  "number": "5.6.6",
  "title": "",
  "body": "   Contour integral    The contour integral of over is the complex valued integral   "
},
{
  "id": "cor-contourint",
  "level": "2",
  "url": "sec-applications.html#cor-contourint",
  "type": "Corollary",
  "number": "5.6.7",
  "title": "",
  "body": "  The contour integral of a holomorphic function depends only on the path up to deformation so long as the endpoints are fixed. If is a closed curve and bounds a region where is holomorphic, then its contour integral is zero.   "
},
{
  "id": "subsec-contour-integrals-10",
  "level": "2",
  "url": "sec-applications.html#subsec-contour-integrals-10",
  "type": "Example",
  "number": "5.6.8",
  "title": "Computing a residue.",
  "body": " Computing a residue   Let be a complex number and consider the function Consider a loop around given by for . Then from our work on differential equations, we have so that Note that this result includes both positive and negative integer values of .   "
},
{
  "id": "thm-holomorphic",
  "level": "2",
  "url": "sec-applications.html#thm-holomorphic",
  "type": "Theorem",
  "number": "5.6.9",
  "title": "Holomorphic functions are analytic.",
  "body": " Holomorphic functions are analytic   Suppose is holomorphic in a disc around . Then there is a positive constant for which, if ,   "
},
{
  "id": "subsec-contour-integrals-14",
  "level": "2",
  "url": "sec-applications.html#subsec-contour-integrals-14",
  "type": "Example",
  "number": "5.6.10",
  "title": "Contour integral of rational functions.",
  "body": " Contour integral of rational functions   Here let's consider the example where is a complex rational function Here and are polynomials in the complex variable . Now, we refer to where it is shown that is holomorphic. If you look back in your notes to the first section, you'll see the Fundamental Theorem of Algebra which states that a non-constant polynomial always has a root. In particular, if is a root of , we can divide by a large enough power to see where is a polynomial and . But then and is holomorphic at . This means there is a Taylor series for at so that Thus, if is a small loop around we can use linearity and our previous example to compute the contour integral   "
},
{
  "id": "subsec-contour-integrals-16",
  "level": "2",
  "url": "sec-applications.html#subsec-contour-integrals-16",
  "type": "Example",
  "number": "5.6.11",
  "title": "Applying contour integrals.",
  "body": " Applying contour integrals   Suppose we want to compute the integral Note that in this case, the denominator can be factored in the complex numbers as Now take and consider the going from to along the -axis and then along the semi-circle paramaterized by for . The contour integral of along breaks up as Examining the second contour integral for large gives In other words, as tends to infinity, the contour integral tends to zero. However, the region between and for large is one on which is always holomorphic. This means their contour integrals are equal by . Furthermore, the same applies if, instead of taking , we took to be a small loop around . Thus, So all we need is to apply equation to our function . For this, we have so that and . Then and Applying equation gives   "
},
{
  "id": "exe-applications-1",
  "level": "2",
  "url": "sec-applications.html#exe-applications-1",
  "type": "Exercise",
  "number": "5.6.3.1",
  "title": "",
  "body": " Verify equations and in .  "
},
{
  "id": "exercise-holomorphicarithmetic",
  "level": "2",
  "url": "sec-applications.html#exercise-holomorphicarithmetic",
  "type": "Exercise",
  "number": "5.6.3.2",
  "title": "",
  "body": "Show the following results  Verify that a constant vector field is solenoidal and satisfies the cross-partials test.   Verify that is solenoidal and satisfies the cross-partials test.   If and are both solenoidal and satisfy the cross partial tests, then so does .   If is solenoidal and satisfy the cross partial tests, then so does   "
},
{
  "id": "exercise-holomorphicrat",
  "level": "2",
  "url": "sec-applications.html#exercise-holomorphicrat",
  "type": "Exercise",
  "number": "5.6.3.3",
  "title": "",
  "body": " Use to show that every complex rational function is holomorphic.  "
},
{
  "id": "exe-applications-4",
  "level": "2",
  "url": "sec-applications.html#exe-applications-4",
  "type": "Exercise",
  "number": "5.6.3.4",
  "title": "",
  "body": " Use a contour integral to calculate  "
},
{
  "id": "ch-partial-differential-equations",
  "level": "1",
  "url": "ch-partial-differential-equations.html",
  "type": "Chapter",
  "number": "6",
  "title": "Partial Differential Equations",
  "body": "# Partial Differential Equations # "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
