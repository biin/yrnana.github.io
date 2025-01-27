import { GatsbyLinkProps, Link } from 'gatsby';

const ActiveLink: React.VFC<GatsbyLinkProps<unknown>> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="hover:text-purple-500 text-sm sm:text-base"
      activeClassName="text-purple-500"
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
