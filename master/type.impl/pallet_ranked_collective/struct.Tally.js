(function() {var type_impls = {
"pallet_ranked_collective":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Tally%3CT,+I,+M%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_ranked_collective/lib.rs.html#103-107\">source</a><a href=\"#impl-Tally%3CT,+I,+M%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"pallet_ranked_collective/pallet/trait.Config.html\" title=\"trait pallet_ranked_collective::pallet::Config\">Config</a>&lt;I&gt;, I: 'static, M: <a class=\"trait\" href=\"pallet_ranked_collective/trait.GetMaxVoters.html\" title=\"trait pallet_ranked_collective::GetMaxVoters\">GetMaxVoters</a>&gt; <a class=\"struct\" href=\"pallet_ranked_collective/struct.Tally.html\" title=\"struct pallet_ranked_collective::Tally\">Tally</a>&lt;T, I, M&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.from_parts\" class=\"method\"><a class=\"src rightside\" href=\"src/pallet_ranked_collective/lib.rs.html#104-106\">source</a><h4 class=\"code-header\">pub fn <a href=\"pallet_ranked_collective/struct.Tally.html#tymethod.from_parts\" class=\"fn\">from_parts</a>(bare_ayes: <a class=\"type\" href=\"pallet_ranked_collective/type.MemberIndex.html\" title=\"type pallet_ranked_collective::MemberIndex\">MemberIndex</a>, ayes: <a class=\"type\" href=\"pallet_ranked_collective/type.Votes.html\" title=\"type pallet_ranked_collective::Votes\">Votes</a>, nays: <a class=\"type\" href=\"pallet_ranked_collective/type.Votes.html\" title=\"type pallet_ranked_collective::Votes\">Votes</a>) -&gt; Self</h4></section></div></details>",0,"pallet_ranked_collective::TallyOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeInfo-for-Tally%3CT,+I,+M%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_ranked_collective/lib.rs.html#89\">source</a><a href=\"#impl-TypeInfo-for-Tally%3CT,+I,+M%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I, M&gt; TypeInfo for <a class=\"struct\" href=\"pallet_ranked_collective/struct.Tally.html\" title=\"struct pallet_ranked_collective::Tally\">Tally</a>&lt;T, I, M&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(T, I, M)</a>&gt;: TypeInfo + 'static,\n    T: 'static,\n    I: 'static,\n    M: <a class=\"trait\" href=\"pallet_ranked_collective/trait.GetMaxVoters.html\" title=\"trait pallet_ranked_collective::GetMaxVoters\">GetMaxVoters</a> + 'static,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Identity\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Identity\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Identity</a> = <a class=\"struct\" href=\"pallet_ranked_collective/struct.Tally.html\" title=\"struct pallet_ranked_collective::Tally\">Tally</a>&lt;T, I, M&gt;</h4></section></summary><div class='docblock'>The type identifying for which type info is provided. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_info\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_ranked_collective/lib.rs.html#89\">source</a><a href=\"#method.type_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">type_info</a>() -&gt; Type</h4></section></summary><div class='docblock'>Returns the static type identifier for <code>Self</code>.</div></details></div></details>","TypeInfo","pallet_ranked_collective::TallyOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-Tally%3CT,+I,+M%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_ranked_collective/lib.rs.html#90\">source</a><a href=\"#impl-Encode-for-Tally%3CT,+I,+M%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I, M: <a class=\"trait\" href=\"pallet_ranked_collective/trait.GetMaxVoters.html\" title=\"trait pallet_ranked_collective::GetMaxVoters\">GetMaxVoters</a>&gt; Encode for <a class=\"struct\" href=\"pallet_ranked_collective/struct.Tally.html\" title=\"struct pallet_ranked_collective::Tally\">Tally</a>&lt;T, I, M&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(T, I, M)</a>&gt;: Encode,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_ranked_collective/lib.rs.html#90\">source</a><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_ranked_collective/lib.rs.html#90\">source</a><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode_to</a>&lt;__CodecOutputEdqy: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    &amp;self,\n    __codec_dest_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut __CodecOutputEdqy</a>\n)</h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">using_encoded</a>&lt;R, F&gt;(&amp;self, f: F) -&gt; R<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; R,</span></h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a>Read more</a></div></details></div></details>","Encode","pallet_ranked_collective::TallyOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Tally%3CT,+I,+M%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_ranked_collective/lib.rs.html#85\">source</a><a href=\"#impl-Clone-for-Tally%3CT,+I,+M%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I, M: <a class=\"trait\" href=\"pallet_ranked_collective/trait.GetMaxVoters.html\" title=\"trait pallet_ranked_collective::GetMaxVoters\">GetMaxVoters</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"pallet_ranked_collective/struct.Tally.html\" title=\"struct pallet_ranked_collective::Tally\">Tally</a>&lt;T, I, M&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_ranked_collective/lib.rs.html#85\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","pallet_ranked_collective::TallyOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MaxEncodedLen-for-Tally%3CT,+I,+M%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_ranked_collective/lib.rs.html#92\">source</a><a href=\"#impl-MaxEncodedLen-for-Tally%3CT,+I,+M%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I, M: <a class=\"trait\" href=\"pallet_ranked_collective/trait.GetMaxVoters.html\" title=\"trait pallet_ranked_collective::GetMaxVoters\">GetMaxVoters</a>&gt; MaxEncodedLen for <a class=\"struct\" href=\"pallet_ranked_collective/struct.Tally.html\" title=\"struct pallet_ranked_collective::Tally\">Tally</a>&lt;T, I, M&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.max_encoded_len\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_ranked_collective/lib.rs.html#92\">source</a><a href=\"#method.max_encoded_len\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">max_encoded_len</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Upper bound, in bytes, of the maximum encoded size of this item.</div></details></div></details>","MaxEncodedLen","pallet_ranked_collective::TallyOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-Tally%3CT,+I,+M%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_ranked_collective/lib.rs.html#91\">source</a><a href=\"#impl-Decode-for-Tally%3CT,+I,+M%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I, M: <a class=\"trait\" href=\"pallet_ranked_collective/trait.GetMaxVoters.html\" title=\"trait pallet_ranked_collective::GetMaxVoters\">GetMaxVoters</a>&gt; Decode for <a class=\"struct\" href=\"pallet_ranked_collective/struct.Tally.html\" title=\"struct pallet_ranked_collective::Tally\">Tally</a>&lt;T, I, M&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(T, I, M)</a>&gt;: Decode,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_ranked_collective/lib.rs.html#91\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode</a>&lt;__CodecInputEdqy: Input&gt;(\n    __codec_input_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut __CodecInputEdqy</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, Error&gt;</h4></section></summary><div class='docblock'>Attempt to deserialise the value from input.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_into\" class=\"method trait-impl\"><a href=\"#method.decode_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode_into</a>&lt;I&gt;(\n    input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut I</a>,\n    dst: &amp;mut <a class=\"union\" href=\"https://doc.rust-lang.org/1.75.0/core/mem/maybe_uninit/union.MaybeUninit.html\" title=\"union core::mem::maybe_uninit::MaybeUninit\">MaybeUninit</a>&lt;Self&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;DecodeFinished, Error&gt;<span class=\"where fmt-newline\">where\n    I: Input,</span></h4></section></summary><div class='docblock'>Attempt to deserialize the value from input into a pre-allocated piece of memory. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip\" class=\"method trait-impl\"><a href=\"#method.skip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">skip</a>&lt;I&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, Error&gt;<span class=\"where fmt-newline\">where\n    I: Input,</span></h4></section></summary><div class='docblock'>Attempt to skip the encoded value from input. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_fixed_size\" class=\"method trait-impl\"><a href=\"#method.encoded_fixed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_fixed_size</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Returns the fixed encoded size of the type. <a>Read more</a></div></details></div></details>","Decode","pallet_ranked_collective::TallyOf"],["<section id=\"impl-Eq-for-Tally%3CT,+I,+M%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_ranked_collective/lib.rs.html#96\">source</a><a href=\"#impl-Eq-for-Tally%3CT,+I,+M%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I, M: <a class=\"trait\" href=\"pallet_ranked_collective/trait.GetMaxVoters.html\" title=\"trait pallet_ranked_collective::GetMaxVoters\">GetMaxVoters</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"pallet_ranked_collective/struct.Tally.html\" title=\"struct pallet_ranked_collective::Tally\">Tally</a>&lt;T, I, M&gt;</h3></section>","Eq","pallet_ranked_collective::TallyOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Tally%3CT,+I,+M%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_ranked_collective/lib.rs.html#86\">source</a><a href=\"#impl-PartialEq-for-Tally%3CT,+I,+M%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I, M: <a class=\"trait\" href=\"pallet_ranked_collective/trait.GetMaxVoters.html\" title=\"trait pallet_ranked_collective::GetMaxVoters\">GetMaxVoters</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"pallet_ranked_collective/struct.Tally.html\" title=\"struct pallet_ranked_collective::Tally\">Tally</a>&lt;T, I, M&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_ranked_collective/lib.rs.html#86\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","pallet_ranked_collective::TallyOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-VoteTally%3Cu32,+%3C%3CT+as+Config%3CI%3E%3E::Polls+as+Polling%3CTally%3CT,+I,+Pallet%3CT,+I%3E%3E%3E%3E::Class%3E-for-Tally%3CT,+I,+M%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_ranked_collective/lib.rs.html#121-174\">source</a><a href=\"#impl-VoteTally%3Cu32,+%3C%3CT+as+Config%3CI%3E%3E::Polls+as+Polling%3CTally%3CT,+I,+Pallet%3CT,+I%3E%3E%3E%3E::Class%3E-for-Tally%3CT,+I,+M%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"pallet_ranked_collective/pallet/trait.Config.html\" title=\"trait pallet_ranked_collective::pallet::Config\">Config</a>&lt;I&gt;, I: 'static, M: <a class=\"trait\" href=\"pallet_ranked_collective/trait.GetMaxVoters.html\" title=\"trait pallet_ranked_collective::GetMaxVoters\">GetMaxVoters</a>&lt;Class = <a class=\"type\" href=\"pallet_ranked_collective/type.ClassOf.html\" title=\"type pallet_ranked_collective::ClassOf\">ClassOf</a>&lt;T, I&gt;&gt;&gt; VoteTally&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>, &lt;&lt;T as <a class=\"trait\" href=\"pallet_ranked_collective/pallet/trait.Config.html\" title=\"trait pallet_ranked_collective::pallet::Config\">Config</a>&lt;I&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_ranked_collective/pallet/trait.Config.html#associatedtype.Polls\" title=\"type pallet_ranked_collective::pallet::Config::Polls\">Polls</a> as Polling&lt;<a class=\"struct\" href=\"pallet_ranked_collective/struct.Tally.html\" title=\"struct pallet_ranked_collective::Tally\">Tally</a>&lt;T, I, <a class=\"struct\" href=\"pallet_ranked_collective/pallet/struct.Pallet.html\" title=\"struct pallet_ranked_collective::pallet::Pallet\">Pallet</a>&lt;T, I&gt;&gt;&gt;&gt;::Class&gt; for <a class=\"struct\" href=\"pallet_ranked_collective/struct.Tally.html\" title=\"struct pallet_ranked_collective::Tally\">Tally</a>&lt;T, I, M&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_ranked_collective/lib.rs.html#124-126\">source</a><a href=\"#method.new\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">new</a>(_: <a class=\"type\" href=\"pallet_ranked_collective/type.ClassOf.html\" title=\"type pallet_ranked_collective::ClassOf\">ClassOf</a>&lt;T, I&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Initializes a new tally.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ayes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_ranked_collective/lib.rs.html#127-129\">source</a><a href=\"#method.ayes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">ayes</a>(&amp;self, _: <a class=\"type\" href=\"pallet_ranked_collective/type.ClassOf.html\" title=\"type pallet_ranked_collective::ClassOf\">ClassOf</a>&lt;T, I&gt;) -&gt; <a class=\"type\" href=\"pallet_ranked_collective/type.Votes.html\" title=\"type pallet_ranked_collective::Votes\">Votes</a></h4></section></summary><div class='docblock'>Returns the number of positive votes for the tally.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.support\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_ranked_collective/lib.rs.html#130-132\">source</a><a href=\"#method.support\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">support</a>(&amp;self, class: <a class=\"type\" href=\"pallet_ranked_collective/type.ClassOf.html\" title=\"type pallet_ranked_collective::ClassOf\">ClassOf</a>&lt;T, I&gt;) -&gt; <a class=\"struct\" href=\"sp_arithmetic/per_things/struct.Perbill.html\" title=\"struct sp_arithmetic::per_things::Perbill\">Perbill</a></h4></section></summary><div class='docblock'>Returns the approval ratio (positive to total votes) for the tally, without multipliers\n(e.g. conviction, ranks, etc.).</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.approval\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_ranked_collective/lib.rs.html#133-135\">source</a><a href=\"#method.approval\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">approval</a>(&amp;self, _: <a class=\"type\" href=\"pallet_ranked_collective/type.ClassOf.html\" title=\"type pallet_ranked_collective::ClassOf\">ClassOf</a>&lt;T, I&gt;) -&gt; <a class=\"struct\" href=\"sp_arithmetic/per_things/struct.Perbill.html\" title=\"struct sp_arithmetic::per_things::Perbill\">Perbill</a></h4></section></summary><div class='docblock'>Returns the approval ratio (positive to total votes) for the tally.</div></details></div></details>","VoteTally<u32, <<T as Config<I>>::Polls as Polling<Tally<T, I, Pallet<T, I>>>>::Class>","pallet_ranked_collective::TallyOf"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Tally%3CT,+I,+M%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_ranked_collective/lib.rs.html#88\">source</a><a href=\"#impl-Debug-for-Tally%3CT,+I,+M%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I, M: <a class=\"trait\" href=\"pallet_ranked_collective/trait.GetMaxVoters.html\" title=\"trait pallet_ranked_collective::GetMaxVoters\">GetMaxVoters</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"pallet_ranked_collective/struct.Tally.html\" title=\"struct pallet_ranked_collective::Tally\">Tally</a>&lt;T, I, M&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_ranked_collective/lib.rs.html#88\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","pallet_ranked_collective::TallyOf"],["<section id=\"impl-EncodeLike-for-Tally%3CT,+I,+M%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_ranked_collective/lib.rs.html#90\">source</a><a href=\"#impl-EncodeLike-for-Tally%3CT,+I,+M%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, I, M: <a class=\"trait\" href=\"pallet_ranked_collective/trait.GetMaxVoters.html\" title=\"trait pallet_ranked_collective::GetMaxVoters\">GetMaxVoters</a>&gt; EncodeLike for <a class=\"struct\" href=\"pallet_ranked_collective/struct.Tally.html\" title=\"struct pallet_ranked_collective::Tally\">Tally</a>&lt;T, I, M&gt;<span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.tuple.html\">(T, I, M)</a>&gt;: Encode,</span></h3></section>","EncodeLike","pallet_ranked_collective::TallyOf"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()