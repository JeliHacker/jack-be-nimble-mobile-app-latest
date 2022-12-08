import { BottomTabScreenProps as NativeBottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Term } from '../data/sanityClient';

/**
 * Bottom Tab Navigator is inside Root Stack Navigator. This is because
 * we don't want to display bottom tabs when Search Result Screen is present.
 *
 * @see {@link https://reactnavigation.org/docs/hiding-tabbar-in-screens|Hiding tab bar in specific screens}
 */
export type RootStackParamList = {
  Root: NavigatorScreenParams<BottomTabParamList> | undefined;
  Term: { term: Term };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type BottomTabParamList = {
  Search: undefined;
  Bookmark: undefined;
  Setting: undefined;
};

export type BottomTabScreenProps<Screen extends keyof BottomTabParamList> =
  CompositeScreenProps<
    NativeBottomTabScreenProps<BottomTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
