(function() {var implementors = {
"cumulus_primitives_utility":[["impl&lt;Target: Get&lt;Fungibles::AssetId&gt;, SwapCredit: SwapCreditT&lt;AccountId, Balance = Fungibles::Balance, AssetKind = Fungibles::AssetId, Credit = Credit&lt;AccountId, Fungibles&gt;&gt;, WeightToFee: <a class=\"trait\" href=\"sp_weights/trait.WeightToFee.html\" title=\"trait sp_weights::WeightToFee\">WeightToFeeT</a>&lt;Balance = Fungibles::Balance&gt;, Fungibles: Balanced&lt;AccountId&gt;, FungiblesAssetMatcher: MatchesFungibles&lt;Fungibles::AssetId, Fungibles::Balance&gt;, OnUnbalanced: OnUnbalancedT&lt;Credit&lt;AccountId, Fungibles&gt;&gt;, AccountId&gt; WeightTrader for <a class=\"struct\" href=\"cumulus_primitives_utility/struct.SwapFirstAssetTrader.html\" title=\"struct cumulus_primitives_utility::SwapFirstAssetTrader\">SwapFirstAssetTrader</a>&lt;Target, SwapCredit, WeightToFee, Fungibles, FungiblesAssetMatcher, OnUnbalanced, AccountId&gt;<span class=\"where fmt-newline\">where\n    Fungibles::Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u128.html\">u128</a>&gt;,</span>"],["impl&lt;AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>, FeeCharger: <a class=\"trait\" href=\"cumulus_primitives_utility/trait.ChargeWeightInFungibles.html\" title=\"trait cumulus_primitives_utility::ChargeWeightInFungibles\">ChargeWeightInFungibles</a>&lt;AccountId, ConcreteAssets&gt;, Matcher: MatchesFungibles&lt;ConcreteAssets::AssetId, ConcreteAssets::Balance&gt;, ConcreteAssets: Mutate&lt;AccountId&gt; + Balanced&lt;AccountId&gt;, HandleRefund: TakeRevenue&gt; WeightTrader for <a class=\"struct\" href=\"cumulus_primitives_utility/struct.TakeFirstAssetTrader.html\" title=\"struct cumulus_primitives_utility::TakeFirstAssetTrader\">TakeFirstAssetTrader</a>&lt;AccountId, FeeCharger, Matcher, ConcreteAssets, HandleRefund&gt;"]],
"polkadot_test_runtime":[["impl <a class=\"trait\" href=\"staging_xcm_executor/traits/weight/trait.WeightTrader.html\" title=\"trait staging_xcm_executor::traits::weight::WeightTrader\">WeightTrader</a> for <a class=\"struct\" href=\"polkadot_test_runtime/xcm_config/struct.DummyWeightTrader.html\" title=\"struct polkadot_test_runtime::xcm_config::DummyWeightTrader\">DummyWeightTrader</a>"]],
"staging_xcm_builder":[["impl&lt;T: Get&lt;(<a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.AssetId.html\" title=\"struct staging_xcm_builder::test_utils::AssetId\">AssetId</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u128.html\">u128</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u128.html\">u128</a>)&gt;, R: <a class=\"trait\" href=\"staging_xcm_builder/trait.TakeRevenue.html\" title=\"trait staging_xcm_builder::TakeRevenue\">TakeRevenue</a>&gt; WeightTrader for <a class=\"struct\" href=\"staging_xcm_builder/struct.FixedRateOfFungible.html\" title=\"struct staging_xcm_builder::FixedRateOfFungible\">FixedRateOfFungible</a>&lt;T, R&gt;"],["impl&lt;WeightToFee: <a class=\"trait\" href=\"sp_weights/trait.WeightToFee.html\" title=\"trait sp_weights::WeightToFee\">WeightToFeeT</a>&lt;Balance = Currency::Balance&gt;, AssetIdValue: Get&lt;<a class=\"struct\" href=\"staging_xcm_builder/test_utils/struct.Location.html\" title=\"struct staging_xcm_builder::test_utils::Location\">Location</a>&gt;, AccountId, Currency: CurrencyT&lt;AccountId&gt;, OnUnbalanced: OnUnbalancedT&lt;Currency::NegativeImbalance&gt;&gt; WeightTrader for <a class=\"struct\" href=\"staging_xcm_builder/struct.UsingComponents.html\" title=\"struct staging_xcm_builder::UsingComponents\">UsingComponents</a>&lt;WeightToFee, AssetIdValue, AccountId, Currency, OnUnbalanced&gt;"]],
"staging_xcm_executor":[]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()